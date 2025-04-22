import { Response } from 'express';
import { getRepository } from 'typeorm';
import { JobApplication } from '../entities/job-application.entity';
import { Job } from '../entities/job.entity';
import { JobSeeker } from '../entities/job-seeker.entity';
import { Employer } from '../entities/employer.entity';
import { validate } from 'class-validator';
import { asyncHandler } from '../middleware/async-handler';
import { AuthRequest } from '../types/auth-request.interface';

export class JobApplicationController {
  private get applicationRepository() {
    return getRepository(JobApplication);
  }

  private get jobRepository() {
    return getRepository(Job);
  }

  createApplication = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user || !(req.user instanceof JobSeeker)) {
      return res.status(401).json({ message: 'Unauthorized - Only job seekers can apply for jobs' });
    }

    const { jobId, coverLetter } = req.body;

    // Check if job exists and is active
    const job = await this.jobRepository.findOne({
      where: { id: jobId, isActive: true }
    });

    if (!job) {
      return res.status(404).json({ message: 'Job not found or not active' });
    }

    // Check if user has already applied
    const existingApplication = await this.applicationRepository.findOne({
      where: {
        job: { id: jobId },
        jobSeeker: { id: req.user.id }
      }
    });

    if (existingApplication) {
      return res.status(400).json({ message: 'You have already applied for this job' });
    }

    const application = this.applicationRepository.create({
      job,
      jobSeeker: req.user,
      coverLetter,
      status: 'pending'
    });

    const errors = await validate(application);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const savedApplication = await this.applicationRepository.save(application);

    return res.status(201).json({
      message: 'Application submitted successfully',
      application: savedApplication
    });
  });

  getApplications = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    let applications;
    if (req.user instanceof JobSeeker) {
      applications = await this.applicationRepository.find({
        where: { jobSeeker: { id: req.user.id } },
        relations: ['job', 'job.employer'],
        order: {
          createdAt: 'DESC'
        }
      });
    } else if (req.user instanceof Employer) {
      applications = await this.applicationRepository.find({
        where: { job: { employer: { id: req.user.id } } },
        relations: ['job', 'jobSeeker'],
        order: {
          createdAt: 'DESC'
        }
      });
    } else {
      return res.status(401).json({ message: 'Unauthorized - Invalid user type' });
    }

    return res.json({ applications });
  });

  getApplication = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { id } = req.params;
    const application = await this.applicationRepository.findOne({
      where: { id },
      relations: ['job', 'jobSeeker', 'job.employer']
    });

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    // Check if user has permission to view this application
    if (req.user instanceof JobSeeker && application.jobSeeker.id !== req.user.id) {
      return res.status(403).json({ message: 'Forbidden - You can only view your own applications' });
    }

    if (req.user instanceof Employer && application.job.employer.id !== req.user.id) {
      return res.status(403).json({ message: 'Forbidden - You can only view applications for your jobs' });
    }

    return res.json({ application });
  });

  updateApplicationStatus = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user || !(req.user instanceof Employer)) {
      return res.status(401).json({ message: 'Unauthorized - Only employers can update application status' });
    }

    const { id } = req.params;
    const { status } = req.body;

    const application = await this.applicationRepository.findOne({
      where: { id },
      relations: ['job', 'job.employer']
    });

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    if (application.job.employer.id !== req.user.id) {
      return res.status(403).json({ message: 'Forbidden - You can only update applications for your jobs' });
    }

    application.status = status;
    const errors = await validate(application);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const updatedApplication = await this.applicationRepository.save(application);

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