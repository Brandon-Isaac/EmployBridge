import { Response } from 'express';
import { getRepository } from 'typeorm';
import { JobSeeker } from '../entities/job-seeker.entity';
import { Education } from '../entities/education.entity';
import { asyncHandler } from '../middleware/async-handler';
import { AuthRequest } from '../types/auth-request.interface';
import { validate } from 'class-validator';

export class JobSeekerEducationController {
  private get jobSeekerRepository() {
    return getRepository(JobSeeker);
  }

  private get educationRepository() {
    return getRepository(Education);
  }

  getJobSeekerEducations = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const jobSeeker = await this.jobSeekerRepository.findOne({
      where: { id: req.user.id },
      relations: ['educations']
    });

    if (!jobSeeker) {
      return res.status(404).json({ message: 'Job seeker not found' });
    }

    return res.json({ educations: jobSeeker.education });
  });
  addEducation = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const jobSeeker = await this.jobSeekerRepository.findOne({
      where: { id: req.user.id }
    });

    if (!jobSeeker) {
      return res.status(404).json({ message: 'Job seeker not found' });
    }

    const education = this.educationRepository.create({
      ...req.body,
      jobSeeker
    });

    const errors = await validate(education);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const savedEducation = await this.educationRepository.save(education);

    return res.status(201).json({
      message: 'Education added successfully',
      education: savedEducation
    });
  });

  updateEducation = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { id } = req.params;
    const education = await this.educationRepository.findOne({
      where: { id, jobSeeker: { id: req.user.id } }
    });

    if (!education) {
      return res.status(404).json({ message: 'Education not found' });
    }

    Object.assign(education, req.body);

    const errors = await validate(education);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const updatedEducation = await this.educationRepository.save(education);

    return res.json({
      message: 'Education updated successfully',
      education: updatedEducation
    });
  });

  deleteEducation = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { id } = req.params;
    const education = await this.educationRepository.findOne({
      where: { id, jobSeeker: { id: req.user.id } }
    });

    if (!education) {
      return res.status(404).json({ message: 'Education not found' });
    }

    await this.educationRepository.remove(education);
    return res.json({ message: 'Education deleted successfully' });
  });
} 