import { Response } from 'express';
import { getRepository } from 'typeorm';
import { JobSeeker } from '../entities/job-seeker.entity';
import { Skill } from '../entities/skill.entity';
import { asyncHandler } from '../middleware/async-handler';
import { AuthRequest } from '../types/auth-request.interface';
import { GoogleGenerativeAI } from '@google/generative-ai';
import * as dotenv from 'dotenv';
dotenv.config();

interface LearningResource {
  title: string;
  description: string;
  type: 'course' | 'article' | 'video' | 'book' | 'project';
  url: string;
  estimatedTime: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  topics: string[];
}

interface LearningPath {
  title: string;
  description: string;
  resources: LearningResource[];
  estimatedCompletionTime: string;
  priority: 'high' | 'medium' | 'low';
}

export class LearningResourcesController {
  private get jobSeekerRepository() {
    return getRepository(JobSeeker);
  }

  private get skillRepository() {
    return getRepository(Skill);
  }

  private async generateLearningPath(skills: Skill[], jobSeeker: JobSeeker): Promise<LearningPath[]> {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    const prompt = `
      As a career development AI, analyze the following job seeker's skills and generate a personalized learning path.
      
      Job Seeker Information:
      - Name: ${jobSeeker.firstName} ${jobSeeker.lastName}
      - Current Skills: ${skills.map(s => s.name).join(', ')}
      
      Generate a comprehensive learning path that includes:
      1. Skill gaps to fill
      2. Recommended learning resources (courses, articles, videos, books, projects)
      3. Estimated time to complete each resource
      4. Difficulty level
      5. Priority level
      
      Format the response as a JSON array of learning paths, where each path has:
      - title
      - description
      - resources (array of objects with title, description, type, url, estimatedTime, difficulty, topics)
      - estimatedCompletionTime
      - priority
      
      Focus on practical, hands-on resources that will help the job seeker build a strong portfolio.
    `;

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      // Parse the JSON response
      const learningPaths: LearningPath[] = JSON.parse(text);
      return learningPaths;
    } catch (error) {
      console.error('Error generating learning path:', error);
      throw new Error('Failed to generate learning path');
    }
  }

  getLearningResources = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const jobSeeker = await this.jobSeekerRepository.findOne({
      where: { id: req.user.id },
      relations: ['skills']
    });

    if (!jobSeeker) {
      return res.status(404).json({ message: 'Job seeker not found' });
    }

    try {
      const learningPaths = await this.generateLearningPath(jobSeeker.skills, jobSeeker);
      
      return res.json({
        message: 'Learning resources generated successfully',
        learningPaths
      });
    } catch (error) {
      console.error('Error getting learning resources:', error);
      return res.status(500).json({ 
        message: 'Failed to generate learning resources',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  getLearningResourcesBySkill = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { skillId } = req.params;
    const skill = await this.skillRepository.findOne({
      where: { id: skillId }
    });

    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    const jobSeeker = await this.jobSeekerRepository.findOne({
      where: { id: req.user.id },
      relations: ['skills']
    });

    if (!jobSeeker) {
      return res.status(404).json({ message: 'Job seeker not found' });
    }

    try {
      const learningPaths = await this.generateLearningPath([skill], jobSeeker);
      
      return res.json({
        message: 'Learning resources generated successfully',
        learningPaths
      });
    } catch (error) {
      console.error('Error getting learning resources:', error);
      return res.status(500).json({ 
        message: 'Failed to generate learning resources',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });
} 