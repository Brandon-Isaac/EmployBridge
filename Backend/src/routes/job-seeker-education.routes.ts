import { Router } from 'express';
import { JobSeekerEducationController } from '../controllers/job-seeker-education.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
const educationController = new JobSeekerEducationController();

// Get all educations
router.get('/', authMiddleware, educationController.getJobSeekerEducations);

// Add new education
router.post('/', authMiddleware, educationController.addEducation);

// Update education
router.put('/:id', authMiddleware, educationController.updateEducation);

// Delete education
router.delete('/:id', authMiddleware, educationController.deleteEducation);

export default router; 