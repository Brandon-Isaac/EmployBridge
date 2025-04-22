import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Job, JobType, ExperienceLevel } from '../entities/job.entity';
import { Skill } from '../entities/skill.entity';
import { Employer } from '../entities/employer.entity';
import { validate } from 'class-validator';
import { asyncHandler } from '../middleware/async-handler';
import { AuthRequest } from '../types/auth-request.interface';

export class JobController {
  private get jobRepository() {
    return getRepository(Job);
  }

  createJob = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user || !(req.user instanceof Employer)) {
      return res.status(401).json({ message: 'Unauthorized - Only employers can create jobs' });
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

    // Get skill repositories
    const skillRepository = getRepository(Skill);

    // Fetch required skills
    const requiredSkillsEntities = await skillRepository.findByIds(requiredSkills || []);

    // Fetch preferred skills
    const preferredSkillsEntities = await skillRepository.findByIds(preferredSkills || []);

    const jobData: Partial<Job> = {
      title,
      description,
      type: type as JobType,
      experienceLevel: experienceLevel as ExperienceLevel,
      location,
      salaryMin: salaryMin ? Number(salaryMin) : undefined,
      salaryMax: salaryMax ? Number(salaryMax) : undefined,
      requiredSkills: requiredSkillsEntities,
      preferredSkills: preferredSkillsEntities,
      benefits: benefits ? benefits.map((benefit: string) => ({
        name: benefit,
        description: ''
      })) : undefined,
      questions: questions ? questions.map((question: string) => ({
        id: Math.random().toString(36).substr(2, 9),
        question,
        required: true
      })) : undefined,
      expiresAt: expiresAt ? new Date(expiresAt) : undefined,
      employer: req.user
    };

    const job = this.jobRepository.create(jobData);

    const errors = await validate(job);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const savedJob = await this.jobRepository.save(job);

    // Return a clean response without sensitive data
    return res.status(201).json({
      message: 'Job created successfully',
      job: {
        id: savedJob.id,
        title: savedJob.title,
        description: savedJob.description,
        type: savedJob.type,
        experienceLevel: savedJob.experienceLevel,
        location: savedJob.location,
        salaryMin: savedJob.salaryMin,
        salaryMax: savedJob.salaryMax,
        benefits: savedJob.benefits,
        questions: savedJob.questions,
        requiredSkills: savedJob.requiredSkills?.map(skill => ({
          id: skill.id,
          name: skill.name,
          category: skill.category
        })) || [],
        preferredSkills: savedJob.preferredSkills?.map(skill => ({
          id: skill.id,
          name: skill.name,
          category: skill.category
        })) || [],
        expiresAt: savedJob.expiresAt,
        isActive: savedJob.isActive,
        createdAt: savedJob.createdAt,
        updatedAt: savedJob.updatedAt
      }
    });
  });

  getJobs = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user || !(req.user instanceof Employer)) {
      return res.status(401).json({ message: 'Unauthorized - Only employers can view their jobs' });
    }

    const jobs = await this.jobRepository.find({
      where: { employer: { id: req.user.id } },
      relations: ['applications', 'requiredSkills', 'preferredSkills'],
      order: {
        createdAt: 'DESC'
      }
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