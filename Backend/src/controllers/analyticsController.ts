import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { User, UserRole } from '../entities/User';
import { Job } from '../entities/Job';
import { Application } from '../entities/Application';
import { CV, CVType, CVStatus } from '../entities/CV';
import { MoreThanOrEqual } from 'typeorm';
import asyncHandler from '../middleware/asyncHandler';

const userRepository = AppDataSource.getRepository(User);
const jobRepository = AppDataSource.getRepository(Job);
const applicationRepository = AppDataSource.getRepository(Application);
const cvRepository = AppDataSource.getRepository(CV);

export const getSystemAnalytics = asyncHandler(async (req: Request, res: Response) => {
  try {
    // Get total users and user types
    const totalUsers = await userRepository.count();
    const jobSeekers = await userRepository.count({ where: { role: UserRole.JOB_SEEKER } });
    const employers = await userRepository.count({ where: { role: UserRole.EMPLOYER } });
    const admins = await userRepository.count({ where: { role: UserRole.ADMIN } });

    // Get total generations and types
    const totalGenerations = await cvRepository.count();
    const cvGenerations = await cvRepository.count({ where: { type: CVType.CV } });
    const coverLetterGenerations = await cvRepository.count({ where: { type: CVType.COVER_LETTER } });
    const resumeGenerations = await cvRepository.count({ where: { type: CVType.RESUME } });

    // Get total CVs and their status
    const totalCVs = await cvRepository.count();
    const draftCVs = await cvRepository.count({ where: { status: CVStatus.DRAFT } });
    const publishedCVs = await cvRepository.count({ where: { status: CVStatus.PUBLISHED } });
    const archivedCVs = await cvRepository.count({ where: { status: CVStatus.ARCHIVED } });

    // Get total jobs and applications
    const totalJobs = await jobRepository.count();
    const totalApplications = await applicationRepository.count();

    // Get recent activity (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const recentUsers = await userRepository.count({
      where: {
        createdAt: MoreThanOrEqual(thirtyDaysAgo)
      }
    });

    const recentJobs = await jobRepository.count({
      where: {
        postedAt: MoreThanOrEqual(thirtyDaysAgo)
      }
    });

    const recentApplications = await applicationRepository.count({
      where: {
        appliedAt: MoreThanOrEqual(thirtyDaysAgo)
      }
    });

    // Compile analytics data
    const analyticsData = {
      totalUsers,
      userTypes: {
        jobSeekers,
        employers,
        admins
      },
      totalGenerations,
      generationsByType: {
        cv: cvGenerations,
        coverLetter: coverLetterGenerations,
        resume: resumeGenerations
      },
      totalCVs,
      cvsByStatus: {
        draft: draftCVs,
        published: publishedCVs,
        archived: archivedCVs
      },
      jobs: {
        total: totalJobs,
        recent: recentJobs
      },
      applications: {
        total: totalApplications,
        recent: recentApplications
      },
      recentActivity: {
        newUsers: recentUsers,
        newJobs: recentJobs,
        newApplications: recentApplications
      }
    };

    res.json(analyticsData);
  } catch (error) {
    console.error('Error fetching analytics:', error);
    res.status(500).json({ message: 'Error fetching analytics data', error });
  }
}); 