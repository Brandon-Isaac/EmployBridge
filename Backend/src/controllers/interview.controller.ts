import {  Response } from 'express';
import { getRepository } from 'typeorm';
import { Interview } from '../entities/interview.entity';
import { JobApplication } from '../entities/job-application.entity';
import { validate } from 'class-validator';
import { asyncHandler } from '../middleware/async-handler';
import { AuthRequest } from '../types/auth-request.interface';

export class InterviewController {
  private get interviewRepository() {
    return getRepository(Interview);
  }

  private get applicationRepository() {
    return getRepository(JobApplication);
  }

  // Employer endpoints
  scheduleInterview = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { applicationId, date, type, location, notes } = req.body;

    const application = await this.applicationRepository.findOne({
      where: { id: applicationId },
      relations: ['job', 'job.employer']
    });

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    if (application.job.employer.id !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to schedule interview for this application' });
    }

    const interview = this.interviewRepository.create({
      application,
      type,
      scheduledAt: date,
      location,
      meetingLink: '',
      status: 'scheduled',
      notes
    });

    const errors = await validate(interview);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    await this.interviewRepository.save(interview);

    return res.status(201).json({
      message: 'Interview scheduled successfully',
      interview
    });
  });

  updateInterview = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { id } = req.params;
    const { date, type, location, notes, status } = req.body;

    const interview = await this.interviewRepository.findOne({
      where: { id },
      relations: ['application', 'application.job', 'application.job.employer']
    });

    if (!interview) {
      return res.status(404).json({ message: 'Interview not found' });
    }

    if (interview.application.job.employer.id !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to update this interview' });
    }

    interview.scheduledAt = date || interview.scheduledAt;
    interview.type = type || interview.type;
    interview.location = location || interview.location;
    interview.notes = notes || interview.notes;
    interview.status = status || interview.status;

    const errors = await validate(interview);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    await this.interviewRepository.save(interview);

    return res.json({
      message: 'Interview updated successfully',
      interview
    });
  });

  cancelInterview = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { id } = req.params;

    const interview = await this.interviewRepository.findOne({
      where: { id },
      relations: ['application', 'application.job', 'application.job.employer']
    });

    if (!interview) {
      return res.status(404).json({ message: 'Interview not found' });
    }

    if (interview.application.job.employer.id !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to cancel this interview' });
    }

    interview.status = 'cancelled';
    await this.interviewRepository.save(interview);

    return res.json({ message: 'Interview cancelled successfully' });
  });

  getEmployerInterviews = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const interviews = await this.interviewRepository.find({
      where: {
        application: {
          job: {
            employer: { id: req.user.id }
          }
        }
      },
      relations: ['application', 'application.jobSeeker']
    });

    return res.json({ interviews });
  });

  // Job Seeker endpoints
  getJobSeekerInterviews = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const interviews = await this.interviewRepository.find({
      where: {
        application: {
          jobSeeker: { id: req.user.id }
        }
      },
      relations: ['application', 'application.job']
    });

    return res.json({ interviews });
  });

  getInterviewDetails = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { id } = req.params;

    const interview = await this.interviewRepository.findOne({
      where: { id },
      relations: ['application', 'application.job', 'application.jobSeeker']
    });

    if (!interview) {
      return res.status(404).json({ message: 'Interview not found' });
    }

    // Check if user is authorized to view this interview
    if (interview.application.jobSeeker.id !== req.user.id && 
        interview.application.job.employer.id !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to view this interview' });
    }

    return res.json({ interview });
  });
} 