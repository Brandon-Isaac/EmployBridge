import { Response } from 'express';
import { getRepository } from 'typeorm';
import { JobSeeker } from '../entities/job-seeker.entity';
import { Experience } from '../entities/experience.entity';
import { asyncHandler } from '../middleware/async-handler';
import { AuthRequest } from '../types/auth-request.interface';
import { validate } from 'class-validator';

export class JobSeekerExperienceController {
  private get jobSeekerRepository() {
    return getRepository(JobSeeker);
  }

  private get experienceRepository() {
    return getRepository(Experience);
  }

  getJobSeekerExperiences = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const jobSeeker = await this.jobSeekerRepository.findOne({
      where: { id: req.user.id },
      relations: ['experiences']
    });

    if (!jobSeeker) {
      return res.status(404).json({ message: 'Job seeker not found' });
    }

    return res.json({ experiences: jobSeeker.experiences });
  });

  addExperience = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const jobSeeker = await this.jobSeekerRepository.findOne({
      where: { id: req.user.id }
    });

    if (!jobSeeker) {
      return res.status(404).json({ message: 'Job seeker not found' });
    }

    const experience = this.experienceRepository.create({
      ...req.body,
      jobSeeker
    });

    const errors = await validate(experience);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const savedExperience = await this.experienceRepository.save(experience);

    return res.status(201).json({
      message: 'Experience added successfully',
      experience: savedExperience
    });
  });

  updateExperience = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { id } = req.params;
    const experience = await this.experienceRepository.findOne({
      where: { id, jobSeeker: { id: req.user.id } }
    });

    if (!experience) {
      return res.status(404).json({ message: 'Experience not found' });
    }

    Object.assign(experience, req.body);

    const errors = await validate(experience);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const updatedExperience = await this.experienceRepository.save(experience);

    return res.json({
      message: 'Experience updated successfully',
      experience: updatedExperience
    });
  });

  deleteExperience = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { id } = req.params;
    const experience = await this.experienceRepository.findOne({
      where: { id, jobSeeker: { id: req.user.id } }
    });

    if (!experience) {
      return res.status(404).json({ message: 'Experience not found' });
    }

    await this.experienceRepository.remove(experience);

    return res.json({ message: 'Experience deleted successfully' });
  });
} 