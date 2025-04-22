import { Router } from 'express';
import { JobApplicationController } from '../controllers/job-application.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
const jobApplicationController = new JobApplicationController();

// Apply for a job
router.post('/', authMiddleware, jobApplicationController.createApplication);

// Get all applications (for job seekers and employers)
router.get('/', authMiddleware, jobApplicationController.getApplications);

// Get a specific application
router.get('/:id', authMiddleware, jobApplicationController.getApplication);

// Update application status (for employers only)
router.patch('/:id/status', authMiddleware, jobApplicationController.updateApplicationStatus);

export default router; 