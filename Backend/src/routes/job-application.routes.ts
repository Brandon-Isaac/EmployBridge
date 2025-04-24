import { Router } from 'express';
import { JobApplicationController } from '../controllers/job-application.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
const jobApplicationController = new JobApplicationController();

// Create a new job application
router.post('/', authMiddleware, jobApplicationController.createApplication);

// Get all job applications for the current user
router.get('/', authMiddleware, jobApplicationController.getApplications);

// Get a specific job application
router.get('/:id', authMiddleware, jobApplicationController.getApplication);

// Withdraw a job application
router.delete('/:id', authMiddleware, jobApplicationController.withdrawApplication);

export default router; 