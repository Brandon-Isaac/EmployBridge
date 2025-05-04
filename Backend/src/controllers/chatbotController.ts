import { Request, Response } from 'express';
import { OpenAI } from 'openai';
import { ChatMessage} from '../entities/Chatmessage';
import { User } from '../entities/User';
import { Job } from '../entities/Job';
import  asyncHandler from '../middleware/asyncHandler';
import { Application } from '../entities/Application';
import { Skill } from '../entities/Skill';
import { AppDataSource } from '../data-source';
import dotenv from 'dotenv';

dotenv.config();

const chatMessageRepository = AppDataSource.getRepository(ChatMessage);
const userRepository = AppDataSource.getRepository(User);
const jobRepository = AppDataSource.getRepository(Job);
// const applicationRepository = AppDataSource.getRepository(Application);
// const skillRepository = AppDataSource.getRepository(Skill);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const chatWithBot =asyncHandler( async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const { message } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ message: 'Invalid message format' });
    }

    // Get user details
    const user = await userRepository.findOne({
      where: { id: userId },
      relations: ['skills', 'experiences', 'educations', 'applications', 'applications.job'],
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Save user message to database
    const userMessage = new ChatMessage();
    userMessage.content = message;
    userMessage.isFromUser = true;
    userMessage.user = user;
    await chatMessageRepository.save(userMessage);

    // Get recent chat history (last 5 messages)
    const chatHistory = await chatMessageRepository.find({
      where: { user: { id: userId } },
      order: { timestamp: 'DESC' },
      take: 5,
    });

    // Prepare context based on user role
    let context = '';
    if (user.role === 'job_seeker') {
      context = `User is a job seeker with the following details:
      - Name: ${user.name}
      - Skills: ${user.skills?.map(skill => skill.name).join(', ') || 'None'}
      - Experience: ${user.experiences?.length || 0} positions
      - Education: ${user.educations?.length || 0} degrees
      - Applications: ${user.applications?.length || 0} job applications`;
    } else if (user.role === 'employer') {
      // Get employer's posted jobs
      const jobs = await jobRepository.find({
        where: { employer: { id: userId } },
        relations: ['applications', 'requiredSkills'],
      });

      context = `User is an employer with the following details:
      - Company: ${user.company || 'Not specified'}
      - Position: ${user.position || 'Not specified'}
      - Posted Jobs: ${jobs.length}
      - Total Applications: ${jobs.reduce((acc, job) => acc + (job.applications?.length ?? 0), 0)}`;
    }

    // Prepare system prompt based on user role
    const systemPrompt = user.role === 'job_seeker' 
      ? `You are a career assistant for the SkillMatch AI platform. Help the job seeker with:
         - Job search advice
         - Application tips
         - Career guidance
         - Skill development
         - Interview preparation
         - Explaining their application statuses
        Use their profile details to provide personalized advice.`
      : `You are a hiring assistant for the SkillMatch AI platform. Help the employer with:
         - Candidate search
         - Job posting optimization
         - Application review
         - Interview scheduling
         - Hiring analytics
        Use their company and job posting details to provide personalized advice.`;

    // Prepare messages for OpenAI
    const messages: any[] = [
      { role: 'system', content: systemPrompt },
      { role: 'system', content: `Current context: ${context}` },
    ];

    // Add chat history (reversed to maintain chronological order)
    chatHistory.reverse().forEach(msg => {
      messages.push({
        role: msg.isFromUser ? 'user' : 'assistant',
        content: msg.content,
      });
    });

    // Add the new user message
    messages.push({ role: 'user', content: message });

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      messages,
      model: 'gpt-4',
      temperature: 0.7,
    });

    const botResponse = completion.choices[0].message.content;

    // Save bot response to database
    const botMessage = new ChatMessage();
    botMessage.content = botResponse ?? 'No response available';
    botMessage.isFromUser = false;
    botMessage.user = user;
    await chatMessageRepository.save(botMessage);

    res.json({
      response: botResponse,
      context: {
        role: user.role,
        name: user.name,
        ...(user.role === 'job_seeker' ? {
          skills: user.skills?.map(skill => skill.name),
          applicationCount: user.applications?.length,
        } : {
          company: user.company,
          jobCount: await jobRepository.count({ where: { employer: { id: userId } }}),
        }),
      },
    });
  } catch (error) {
    console.error('Error in chatbot:', error);
    res.status(500).json({ message: 'Error processing chat message', error });
  }
});

export const getChatHistory =asyncHandler( async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const { limit = 20 } = req.query;

    const messages = await chatMessageRepository.find({
      where: { user: { id: userId } },
      order: { timestamp: 'ASC' },
      take: Number(limit),
    });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching chat history', error });
  }
});

// Specialized query functions for different user types
export const queryCandidates = asyncHandler(async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const { query } = req.body;

    // Verify user is an employer
    const user = await userRepository.findOne({ where: { id: userId } });
    if (!user || user.role !== 'employer') {
      return res.status(403).json({ message: 'Only employers can query candidates' });
    }

    // Parse the natural language query
    const prompt = `Convert this natural language query into structured filters for candidate search:
    "${query}"
    
    Return a JSON object with possible filters like:
    {
      "skills": [],
      "minExperience": null,
      "educationLevel": null,
      "location": null
    }`;

    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a query parser for a recruitment system. Extract filters from natural language.' },
        { role: 'user', content: prompt }
      ],
      model: 'gpt-4',
      response_format: { type: 'json_object' },
    });

    if (!completion.choices[0].message.content) {
      throw new Error('Completion message content is null or undefined');
    }
    const filters = JSON.parse(completion.choices[0].message.content);

    // Build TypeORM query based on filters
    const queryBuilder = userRepository.createQueryBuilder('user')
      .leftJoinAndSelect('user.skills', 'skills')
      .leftJoinAndSelect('user.educations', 'educations')
      .leftJoinAndSelect('user.experiences', 'experiences')
      .where('user.role = :role', { role: 'job_seeker' });

    if (filters.skills && filters.skills.length > 0) {
      queryBuilder.andWhere('skills.name IN (:...skills)', { skills: filters.skills });
    }

    if (filters.minExperience) {
      queryBuilder.andWhere('(SELECT COUNT(*) FROM experience WHERE experience.userId = user.id) >= :minExp', {
        minExp: filters.minExperience,
      });
    }

    if (filters.educationLevel) {
      queryBuilder.andWhere('educations.degree LIKE :degree', { degree: `%${filters.educationLevel}%` });
    }

    if (filters.location) {
      queryBuilder.andWhere('user.location LIKE :location', { location: `%${filters.location}%` });
    }

    const candidates = await queryBuilder.getMany();

    // Format response with AI
    const responsePrompt = `Summarize these ${candidates.length} candidates found with filters: ${JSON.stringify(filters)}.
    Highlight key statistics and notable candidates.`;

    const responseCompletion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a recruitment assistant summarizing candidate search results.' },
        { role: 'user', content: responsePrompt }
      ],
      model: 'gpt-4',
    });

    res.json({
      summary: responseCompletion.choices[0].message.content,
      candidates: candidates.map(candidate => ({
        id: candidate.id,
        name: candidate.name,
        skills: candidate.skills?.map(skill => skill.name),
        experienceCount: candidate.experiences?.length,
        education: candidate.educations?.map(edu => edu.degree),
      })),
      filters,
    });
  } catch (error) {
    console.error('Error querying candidates:', error);
    res.status(500).json({ message: 'Error querying candidates', error });
  }
});

export const queryJobs =asyncHandler( async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const { query } = req.body;

    // Verify user is a job seeker
    const user = await userRepository.findOne({ where: { id: userId } });
    if (!user || user.role !== 'job_seeker') {
      return res.status(403).json({ message: 'Only job seekers can query jobs' });
    }

    // Parse the natural language query
    const prompt = `Convert this job search query into structured filters:
    "${query}"
    
    Return JSON with possible filters like:
    {
      "skills": [],
      "jobTitle": null,
      "location": null,
      "employmentType": null,
      "experienceLevel": null
    }`;

    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a job search query parser. Extract filters from natural language.' },
        { role: 'user', content: prompt }
      ],
      model: 'gpt-4',
      response_format: { type: 'json_object' },
    });

    if (!completion.choices[0].message.content) {
      throw new Error('Completion message content is null or undefined');
    }
    // Parse the filters from the AI response
    const filters = JSON.parse(completion.choices[0].message.content);

    // Build TypeORM query
    const queryBuilder = jobRepository.createQueryBuilder('job')
      .leftJoinAndSelect('job.requiredSkills', 'skills')
      .leftJoinAndSelect('job.employer', 'employer');

    if (filters.skills && filters.skills.length > 0) {
      queryBuilder.andWhere('skills.name IN (:...skills)', { skills: filters.skills });
    }

    if (filters.jobTitle) {
      queryBuilder.andWhere('job.title LIKE :title', { title: `%${filters.jobTitle}%` });
    }

    if (filters.location) {
      queryBuilder.andWhere('job.location LIKE :location', { location: `%${filters.location}%` });
    }

    if (filters.employmentType) {
      queryBuilder.andWhere('job.employmentType = :type', { type: filters.employmentType });
    }

    if (filters.experienceLevel) {
      queryBuilder.andWhere('job.experienceLevel = :level', { level: filters.experienceLevel });
    }

    const jobs = await queryBuilder.getMany();

    // Calculate match score for each job based on user skills
    const userSkills = user.skills?.map(skill => skill.name) || [];
    const jobsWithScores = jobs.map(job => {
      const requiredSkills = job.requiredSkills?.map(skill => skill.name) || [];
      const matchingSkills = userSkills.filter(skill => requiredSkills.includes(skill));
      const matchScore = requiredSkills.length > 0 
        ? (matchingSkills.length / requiredSkills.length) * 100 
        : 0;

      return {
        ...job,
        matchScore: Math.round(matchScore * 10) / 10,
      };
    }).sort((a, b) => b.matchScore - a.matchScore);

    // Format response with AI
    const responsePrompt = `Summarize these ${jobsWithScores.length} jobs found with filters: ${JSON.stringify(filters)}.
    The job seeker has these skills: ${userSkills.join(', ')}.
    Highlight best matches and interesting opportunities.`;

    const responseCompletion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a career assistant summarizing job search results.' },
        { role: 'user', content: responsePrompt }
      ],
      model: 'gpt-4',
    });

    res.json({
      summary: responseCompletion.choices[0].message.content,
      jobs: jobsWithScores,
      filters,
    });
  } catch (error) {
    console.error('Error querying jobs:', error);
    res.status(500).json({ message: 'Error querying jobs', error });
  }
});