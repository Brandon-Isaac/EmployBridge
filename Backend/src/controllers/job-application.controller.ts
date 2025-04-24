import {  Response } from 'express';
import { getRepository } from 'typeorm';
import { JobApplication } from '../entities/job-application.entity';
import { Job } from '../entities/job.entity';
import { JobSeeker } from '../entities/job-seeker.entity';
import { Employer } from '../entities/employer.entity';
import { validate } from 'class-validator';
import { asyncHandler } from '../middleware/async-handler';
import { AuthRequest } from '../types/auth-request.interface';

export class JobApplicationController {
  private get jobApplicationRepository() {
    return getRepository(JobApplication);
  }

  private get jobRepository() {
    return getRepository(Job);
  }

  private get jobSeekerRepository() {
    return getRepository(JobSeeker);
  }

  createApplication = asyncHandler(async (req: AuthRequest, res: Response) => {
    const { jobId, coverLetter, answers } = req.body;

    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const job = await this.jobRepository.findOne({ where: { id: jobId } });
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    const jobSeeker = await this.jobSeekerRepository.findOne({ where: { id: req.user.id } });
    if (!jobSeeker) {
      return res.status(404).json({ message: 'Job seeker not found' });
    }
    const application = this.jobApplicationRepository.create({
      job,
      jobSeeker,
      coverLetter,
      status: 'pending',
      answers
    });

    await this.jobApplicationRepository.save(application);

    return res.status(201).json({
      message: 'Application submitted successfully',
      application
    });
  });

  getApplications = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const applications = await this.jobApplicationRepository.find({
      where: { jobSeeker: { id: req.user.id } },
      relations: ['job', 'job.company'],
      order: { createdAt: 'DESC' }
    });

    return res.json(applications);
  });

  getApplication = asyncHandler(async (req: AuthRequest, res: Response) => {
    const { id } = req.params;

    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const application = await this.jobApplicationRepository.findOne({
      where: { id, jobSeeker: { id: req.user.id } },
      relations: ['job', 'job.company', 'interviews']
    });

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    return res.json(application);
  });

  withdrawApplication = asyncHandler(async (req: AuthRequest, res: Response) => {
    const { id } = req.params;

    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const application = await this.jobApplicationRepository.findOne({
      where: { id, jobSeeker: { id: req.user.id } }
    });

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    if (application.status !== 'pending') {
      return res.status(400).json({ message: 'Cannot withdraw application that is not pending' });
    }

    await this.jobApplicationRepository.remove(application);

    return res.json({ message: 'Application withdrawn successfully' });
  });

  updateApplicationStatus = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user || !(req.user instanceof Employer)) {
      return res.status(401).json({ message: 'Unauthorized - Only employers can update application status' });
    }

    const { id } = req.params;
    const { status } = req.body;

    const application = await this.jobApplicationRepository.findOne({
      where: { id },
      relations: ['job', 'job.employer']
    });

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    if (application.job.company.id !== req.user.id) {
      return res.status(403).json({ message: 'Forbidden - You can only update applications for your jobs' });
    }

    application.status = status;
    const errors = await validate(application);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const updatedApplication = await this.jobApplicationRepository.save(application);

    return res.json({
      message: 'Application status updated successfully',
      application: {
        id: updatedApplication.id,
        status: updatedApplication.status,
        updatedAt: updatedApplication.updatedAt
      }
    });
  });
} 