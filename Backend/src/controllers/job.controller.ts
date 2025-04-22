import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Job } from '../entities/job.entity';
import { validate } from 'class-validator';
import { asyncHandler } from '../middleware/async-handler';
import { AuthRequest } from '../types/auth-request.interface';

export class JobController {
  private get jobRepository() {
    return getRepository(Job);
  }

  createJob = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const {
      title,
      description,
      type,
      experienceLevel,
      location,
      salaryMin,
      salaryMax,
      requiredSkills,
      preferredSkills,
      benefits,
      questions,
      expiresAt
    } = req.body;

    const job = this.jobRepository.create({
      title,
      description,
      type,
      experienceLevel,
      location,
      salaryMin,
      salaryMax,
      requiredSkills,
      preferredSkills,
      benefits,
      questions,
      expiresAt,
      employer: req.user
    });

    const errors = await validate(job);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    await this.jobRepository.save(job);

    return res.status(201).json({
      message: 'Job created successfully',
      job
    });
  });

  getJobs = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const jobs = await this.jobRepository.find({
      where: { employer: { id: req.user.id } },
      relations: ['applications']
    });

    return res.json({ jobs });
  });

  getJob = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { id } = req.params;
    const job = await this.jobRepository.findOne({
      where: { id, employer: { id: req.user.id } },
      relations: ['applications']
    });

    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    return res.json({ job });
  });

  updateJob = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { id } = req.params;
    const {
      title,
      description,
      type,
      experienceLevel,
      location,
      salaryMin,
      salaryMax,
      requiredSkills,
      preferredSkills,
      benefits,
      questions,
      isActive,
      expiresAt
    } = req.body;

    const job = await this.jobRepository.findOne({
      where: { id, employer: { id: req.user.id } }
    });

    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    job.title = title || job.title;
    job.description = description || job.description;
    job.type = type || job.type;
    job.experienceLevel = experienceLevel || job.experienceLevel;
    job.location = location || job.location;
    job.salaryMin = salaryMin || job.salaryMin;
    job.salaryMax = salaryMax || job.salaryMax;
    job.requiredSkills = requiredSkills || job.requiredSkills;
    job.preferredSkills = preferredSkills || job.preferredSkills;
    job.benefits = benefits || job.benefits;
    job.questions = questions || job.questions;
    job.isActive = isActive !== undefined ? isActive : job.isActive;
    job.expiresAt = expiresAt || job.expiresAt;

    const errors = await validate(job);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    await this.jobRepository.save(job);

    return res.json({
      message: 'Job updated successfully',
      job
    });
  });

  deleteJob = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { id } = req.params;
    const job = await this.jobRepository.findOne({
      where: { id, employer: { id: req.user.id } }
    });

    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    await this.jobRepository.remove(job);

    return res.json({ message: 'Job deleted successfully' });
  });

  // Public endpoints for job seekers
  searchJobs = asyncHandler(async (req: Request, res: Response) => {
    const {
      title,
      location,
      type,
      experienceLevel,
      minSalary,
      maxSalary,
      skills
    } = req.query;

    const query = this.jobRepository.createQueryBuilder('job')
      .where('job.isActive = :isActive', { isActive: true });

    if (title) {
      query.andWhere('LOWER(job.title) LIKE LOWER(:title)', { title: `%${title}%` });
    }

    if (location) {
      query.andWhere('LOWER(job.location) LIKE LOWER(:location)', { location: `%${location}%` });
    }

    if (type) {
      query.andWhere('job.type = :type', { type });
    }

    if (experienceLevel) {
      query.andWhere('job.experienceLevel = :experienceLevel', { experienceLevel });
    }

    if (minSalary) {
      query.andWhere('job.salaryMin >= :minSalary', { minSalary });
    }

    if (maxSalary) {
      query.andWhere('job.salaryMax <= :maxSalary', { maxSalary });
    }

    if (skills) {
      const skillArray = Array.isArray(skills) ? skills : [skills];
      query.andWhere('job.requiredSkills && :skills', { skills: skillArray });
    }

    const jobs = await query.getMany();

    return res.json({ jobs });
  });

  getJobDetails = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const job = await this.jobRepository.findOne({
      where: { id, isActive: true },
      relations: ['employer']
    });

    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    return res.json({ job });
  });
} 