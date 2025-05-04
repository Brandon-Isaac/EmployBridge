import { Request, Response } from 'express';
import { Application } from '../entities/Application';
import { Job } from '../entities/Job';
import { User } from '../entities/User';
import { AppDataSource } from '../data-source';
import { ApplicationStatus } from '../entities/Application';
import asyncHandler from '../middleware/asyncHandler';

const applicationRepository = AppDataSource.getRepository(Application);
const jobRepository = AppDataSource.getRepository(Job);
const userRepository = AppDataSource.getRepository(User);

export const createApplication =asyncHandler( async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const { jobId } = req.body;

    const user = await userRepository.findOne({
      where: { id: userId },
      relations: ['skills', 'portfolio', 'cv'],
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const job = await jobRepository.findOne({
      where: { id: jobId },
      relations: ['requiredSkills'],
    });
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    // Check if application already exists
    const existingApplication = await applicationRepository.findOne({
      where: { user: { id: userId }, job: { id: jobId } },
    });
    if (existingApplication) {
      return res.status(400).json({ message: 'Application already exists' });
    }

    // Calculate match score
    const userSkillIds = user.skills?.map(skill => skill.id) || [];
    const requiredSkillIds = job.requiredSkills.map(skill => skill.id);
    const matchingSkills = userSkillIds.filter(skillId => 
      requiredSkillIds.includes(skillId)
    );
    const matchScore = (matchingSkills.length / requiredSkillIds.length) * 100;

    const application = new Application();
    application.user = user;
    application.job = job;
    application.matchScore = Math.round(matchScore * 10) / 10; // Round to 1 decimal place

    await applicationRepository.save(application);
    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ message: 'Error creating application', error });
  }
});

export const getApplicationById =asyncHandler( async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const application = await applicationRepository.findOne({
      where: { id },
      relations: ['user', 'job', 'job.employer', 'job.requiredSkills'],
    });

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    res.json(application);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching application', error });
  }
});

export const updateApplicationStatus =asyncHandler( async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const userId = (req as any).user.userId;

    const application = await applicationRepository.findOne({
      where: { id },
      relations: ['job', 'job.employer'],
    });

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    // Check if the user is the employer who posted the job
    if (application.job.employer.id !== userId) {
      return res.status(403).json({ message: 'Not authorized to update this application' });
    }

    if (!Object.values(ApplicationStatus).includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    application.status = status as ApplicationStatus;

    // If status is 'interview', set interview date
    if (status === ApplicationStatus.INTERVIEW && req.body.interviewDate) {
      application.interviewDate = new Date(req.body.interviewDate);
    }

    await applicationRepository.save(application);
    res.json(application);
  } catch (error) {
    res.status(500).json({ message: 'Error updating application status', error });
  }
});

export const getUserApplications =asyncHandler( async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const applications = await applicationRepository.find({
      where: { user: { id: userId } },
      relations: ['job', 'job.employer', 'job.requiredSkills'],
      order: { appliedAt: 'DESC' },
    });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user applications', error });
  }
});

export const getJobApplications =asyncHandler( async (req: Request, res: Response) => {
  try {
    const { jobId } = req.params;
    const applications = await applicationRepository.find({
      where: { job: { id: jobId } },
      relations: ['user', 'user.skills'],
      order: { matchScore: 'DESC' },
    });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching job applications', error });
  }
});

export const getApplicationMatchScore =asyncHandler( async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const application = await applicationRepository.findOne({
      where: { id },
      select: ['matchScore'],
    });

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    res.json({ matchScore: application.matchScore });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching match score', error });
  }
});