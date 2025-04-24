import { Router } from 'express';
import { JobSeekerExperienceController } from '../controllers/job-seeker-experience.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
const experienceController = new JobSeekerExperienceController();

// Get all experiences
router.get('/', authMiddleware, experienceController.getJobSeekerExperiences);

// Add new experience
router.post('/', authMiddleware, experienceController.addExperience);

// Update experience
router.put('/:id', authMiddleware, experienceController.updateExperience);

// Delete experience
router.delete('/:id', authMiddleware, experienceController.deleteExperience);

export default router; 