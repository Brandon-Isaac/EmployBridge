import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { CareerPath } from '../entities/career-path.entity';
import { asyncHandler } from '../middleware/async-handler';
import { AuthRequest } from '../types/auth-request.interface';

export class CareerPathController {
  private get careerPathRepository() {
    return getRepository(CareerPath);
  }

  generateCareerPath = asyncHandler(async (req: AuthRequest, res: Response) => {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ message: 'Prompt is required' });
    }

    // TODO: Call Gemini API to generate career path based on prompt
    // For now, returning a mock response
    const careerPath = this.careerPathRepository.create({
      title: 'AI Generated Career Path',
      description: 'Generated based on your prompt: ' + prompt,
      currentLevel: 'Entry Level',
      nextLevel: 'Mid Level',
      progress: 0,
      requiredSkills: ['Skill 1', 'Skill 2'],
      milestones: [
        {
          title: 'First Milestone',
          description: 'Description of first milestone',
          status: 'upcoming',
          skills: ['Skill 1'],
          timeframe: '3 months'
        }
      ],
      aiPrompt: prompt
    });

    await this.careerPathRepository.save(careerPath);

    return res.status(201).json({
      message: 'Career path generated successfully',
      careerPath
    });
  });

  getCareerPaths = asyncHandler(async (req: AuthRequest, res: Response) => {
    const careerPaths = await this.careerPathRepository.find({
      order: { createdAt: 'DESC' }
    });

    return res.json(careerPaths);
  });

  updateProgress = asyncHandler(async (req: AuthRequest, res: Response) => {
    const { id } = req.params;
    const { progress } = req.body;

    const careerPath = await this.careerPathRepository.findOne({ where: { id } });
    if (!careerPath) {
      return res.status(404).json({ message: 'Career path not found' });
    }

    careerPath.progress = Math.max(0, Math.min(100, progress));
    await this.careerPathRepository.save(careerPath);

    return res.json({
      message: 'Progress updated successfully',
      careerPath
    });
  });
} 