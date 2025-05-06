import { Request, Response } from 'express';
import { Job } from '../entities/Job';
import { User } from '../entities/User';
import { Skill } from '../entities/Skill';
import { AppDataSource } from '../data-source';
import { Like, In } from 'typeorm';
import asyncHandler from '../middleware/asyncHandler';
import { GoogleGenerativeAI } from '@google/generative-ai';

const jobRepository = AppDataSource.getRepository(Job);
const userRepository = AppDataSource.getRepository(User);
const skillRepository = AppDataSource.getRepository(Skill);

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export const getAllJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await jobRepository.find({
      relations: ['employer', 'requiredSkills'],
    });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching jobs', error });
  }
};

export const getJobById =asyncHandler( async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const job = await jobRepository.findOne({
      where: { id },
      relations: ['employer', 'requiredSkills', 'applications'],
    });

    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    res.json(job);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching job', error });
  }
});

export const createJob = asyncHandler(async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const {
      title,
      description,
      location,
      salary,
      employmentType,
      requiredSkillIds,
      deadline,
    } = req.body;

    const employer = await userRepository.findOne({ where: { id: userId } });
    if (!employer) {
      return res.status(404).json({ message: 'Employer not found' });
    }

    const job = new Job();
    job.title = title;
    job.description = description;
    job.location = location;
    if (salary) job.salary = salary;
    job.employmentType = employmentType;
    job.employer = employer;

    if (requiredSkillIds && requiredSkillIds.length > 0) {
      const skills = await skillRepository.find({
        where: { id: In(requiredSkillIds) },
      });
      job.requiredSkills = skills;
    }

    if (deadline) job.deadline = new Date(deadline);

    await jobRepository.save(job);
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: 'Error creating job', error });
  }
});

export const updateJob = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = (req as any).user.userId;
    const updateData = req.body;
    const job = await jobRepository.findOne({
      where: { id },
      relations: ['employer', 'requiredSkills'],
    });

    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    if (job.employer.id !== userId) {
      return res.status(403).json({ message: 'Not authorized to update this job' });
    }

    if (updateData.title) job.title = updateData.title;
    if (updateData.description) job.description = updateData.description;
    if (updateData.location) job.location = updateData.location;
    if (updateData.salary) job.salary = updateData.salary;
    if (updateData.employmentType) job.employmentType = updateData.employmentType;
    if (updateData.deadline) job.deadline = new Date(updateData.deadline);

    if (updateData.requiredSkillIds) {
      const skills = await skillRepository.find({
        where: { id: In(updateData.requiredSkillIds) },
      });
      job.requiredSkills = skills;
    }

    await jobRepository.save(job);
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: 'Error updating job', error });
  }
});

export const deleteJob = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = (req as any).user.userId;

    const job = await jobRepository.findOne({
      where: { id },
      relations: ['employer'],
    });
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    if (job.employer.id !== userId) {
      return res.status(403).json({ message: 'Not authorized to delete this job' });
    }
    await jobRepository.delete(id);
    res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting job', error });
  }
});

export const getJobsByEmployer = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { employerId } = req.params;
    const jobs = await jobRepository.find({
      where: { employer: { id: employerId } },
      relations: ['requiredSkills', 'applications'],
    });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employer jobs', error });
  }
});

export const searchJobs = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { query, location, skills } = req.query;

    const where: any = {};
    if (query) {
      where.title = Like(`%${query}%`);
    }
    if (location) {
      where.location = Like(`%${location}%`);
    }
    const options: any = {
      where,
      relations: ['employer', 'requiredSkills'],
    };

    if (skills) {
      const skillIds = (skills as string).split(',');
      options.where.requiredSkills = { id: In(skillIds) };
    }

    const jobs = await jobRepository.find(options);
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Error searching jobs', error });
  }
});

export const getRecommendedJobs =asyncHandler( async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    
    // Get user skills
    const user = await userRepository.findOne({
      where: { id: userId },
      relations: ['skills'],
    });

    if (!user || !user.skills || user.skills.length === 0) {
      return res.json([]);
    }

    const userSkillIds = user.skills.map(skill => skill.id);

    // Find jobs that require at least one of the user's skills
    const jobs = await jobRepository.find({
      where: {
        requiredSkills: { id: In(userSkillIds) },
      },
      relations: ['employer', 'requiredSkills'],
    });

    // Calculate match score for each job
    const jobsWithScores = jobs.map(job => {
      const requiredSkillIds = job.requiredSkills.map(skill => skill.id);
      const matchingSkills = userSkillIds.filter(skillId => 
        requiredSkillIds.includes(skillId)
      );
      const matchScore = (matchingSkills.length / requiredSkillIds.length) * 100;
      
      return {
        ...job,
        matchScore: Math.round(matchScore * 10) / 10, // Round to 1 decimal place
      };
    });

    // Sort by match score (highest first)
    jobsWithScores.sort((a, b) => b.matchScore - a.matchScore);

    res.json(jobsWithScores);
  } catch (error) {
    res.status(500).json({ message: 'Error getting recommended jobs', error });
  }
});

export const generateJobWithAI = asyncHandler(async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const { title, location, employmentType, salary } = req.body;

    // Verify user is an employer
    const employer = await userRepository.findOne({ where: { id: userId } });
    if (!employer || employer.role !== 'employer') {
      return res.status(403).json({ message: 'Only employers can generate jobs' });
    }

    // Generate job description and skills using Gemini
    const prompt = `Generate a detailed job description and required skills for a ${title} position.
    Location: ${location}
    Employment Type: ${employmentType}
    Salary Range: ${salary}

    Return ONLY a JSON object (no markdown, no backticks) with this structure:
    {
      "description": "detailed job description",
      "skills": [
        {
          "name": "skill name",
          "description": "brief description of why this skill is needed",
          "category": "one of: Technical, Soft Skills, Domain Knowledge, Tools, Languages"
        }
      ]
    }`;

    const completion = await model.generateContent(prompt);
    if (!completion.response.text()) {
      throw new Error('Failed to generate job details');
    }

    // Clean and parse the response
    const responseText = completion.response.text().replace(/```json\n?|\n?```/g, '').trim();
    const generatedData = JSON.parse(responseText);

    // Create or update skills in the database
    const skills = await Promise.all(
      generatedData.skills.map(async (skillData: { name: string; description: string; category: string }) => {
        let skill = await skillRepository.findOne({
          where: { name: skillData.name }
        });

        if (!skill) {
          skill = new Skill();
          skill.name = skillData.name;
          skill.description = skillData.description;
          skill.category = skillData.category;
          await skillRepository.save(skill);
        }

        return skill;
      })
    );

    // Create the job
    const job = new Job();
    job.title = title;
    job.description = generatedData.description;
    job.location = location;
    job.salary = salary;
    job.employmentType = employmentType;
    job.employer = employer;
    job.requiredSkills = skills;

    await jobRepository.save(job);

    res.status(201).json({
      job,
      generatedSkills: skills,
      message: 'Job generated successfully with AI'
    });
  } catch (error) {
    console.error('Error generating job:', error);
    res.status(500).json({ 
      message: 'Error generating job with AI', 
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});