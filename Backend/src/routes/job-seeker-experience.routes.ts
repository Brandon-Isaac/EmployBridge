import { Router } from 'express';
import { JobSeekerExperienceController } from '../controllers/job-seeker-experience.controller';

const router = Router();

// Get all experiences for the authenticated job seeker
router.get('/', JobSeekerExperienceController.getExperiences);

// Add a new experience
router.post('/', JobSeekerExperienceController.addExperience);

// Update an experience
router.put('/:id', JobSeekerExperienceController.updateExperience);

// Delete an experience
router.delete('/:id', JobSeekerExperienceController.deleteExperience);

export default router; 