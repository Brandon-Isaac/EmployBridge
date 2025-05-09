import { Request, Response } from 'express';
import { Interview, InterviewStatus } from '../entities/Interview';
import { Application, ApplicationStatus } from '../entities/Application';
import { AppDataSource } from '../data-source';
import asyncHandler from '../middleware/asyncHandler';

const interviewRepository = AppDataSource.getRepository(Interview);
const applicationRepository = AppDataSource.getRepository(Application);

export const getUserInterviews = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    // Get all applications that are in interview stage
    const applications = await applicationRepository.find({
      where: {
        user: { id: userId },
        status: ApplicationStatus.INTERVIEW
      },
      relations: ['job', 'job.employer', 'interview']
    });

    // Transform the data to match the frontend interface
    const interviews = applications.map(app => ({
      id: app.interview?.id || '',
      applicationId: app.id,
      jobTitle: app.job.title,
      companyName: app.job.employer.company,
      scheduledTime: app.interview?.scheduledTime || new Date(),
      status: app.interview?.status || InterviewStatus.PENDING,
      location: app.interview?.location,
      notes: app.interview?.notes
    }));

    res.json(interviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching interviews', error });
  }
});

export const respondToInterview = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { interviewId } = req.params;
    const { response } = req.body;

    if (![InterviewStatus.ACCEPTED, InterviewStatus.REJECTED].includes(response)) {
      return res.status(400).json({ message: 'Invalid response status' });
    }

    // Update the interview status
    const interview = await interviewRepository.findOne({
      where: { id: interviewId },
      relations: ['application']
    });

    if (!interview) {
      return res.status(404).json({ message: 'Interview not found' });
    }

    interview.status = response;
    await interviewRepository.save(interview);

    // If rejected, update the application status to rejected
    if (response === InterviewStatus.REJECTED) {
      const application = interview.application;
      application.status = ApplicationStatus.REJECTED;
      await applicationRepository.save(application);
    }

    res.json(interview);
  } catch (error) {
    res.status(500).json({ message: 'Error responding to interview', error });
  }
});

export const scheduleInterview = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { applicationId } = req.params;
    const { scheduledTime, location, notes } = req.body;

    // Check if the application exists and is in a valid state
    const application = await applicationRepository.findOne({
      where: { id: applicationId },
      relations: ['interview']
    });

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    let interview = application.interview;
    if (!interview) {
      interview = new Interview();
      interview.application = application;
    }

    interview.scheduledTime = new Date(scheduledTime);
    interview.location = location;
    interview.notes = notes;
    interview.status = InterviewStatus.PENDING;

    await interviewRepository.save(interview);

    // Update application status to interview
    application.status = ApplicationStatus.INTERVIEW;
    await applicationRepository.save(application);

    res.json(interview);
  } catch (error) {
    res.status(500).json({ message: 'Error scheduling interview', error });
  }
});

export const cancelInterview = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { interviewId } = req.params;
    const { reason } = req.body;

    const interview = await interviewRepository.findOne({
      where: { id: interviewId },
      relations: ['application']
    });

    if (!interview) {
      return res.status(404).json({ message: 'Interview not found' });
    }

    // Update the interview status
    interview.status = InterviewStatus.CANCELLED;
    interview.notes = reason ? `Cancelled: ${reason}` : 'Interview cancelled';
    await interviewRepository.save(interview);

    // Update the application status back to reviewed
    const application = interview.application;
    application.status = ApplicationStatus.REVIEWED;
    await applicationRepository.save(application);

    res.json(interview);
  } catch (error) {
    res.status(500).json({ message: 'Error cancelling interview', error });
  }
}); 