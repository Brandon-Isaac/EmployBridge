import { Router } from 'express';
import { JobSeekerSkillsController } from '../controllers/job-seeker-skills.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
const jobSeekerSkillsController = new JobSeekerSkillsController();

// Get job seeker's skills
router.get('/', authMiddleware, jobSeekerSkillsController.getJobSeekerSkills);

// Add a skill to job seeker
router.post('/:jobSeekerId', authMiddleware, jobSeekerSkillsController.addSkill);

// Remove a skill from job seeker
router.delete('/:jobSeekerId/:skillId', authMiddleware, jobSeekerSkillsController.removeSkill);

// Update skill level
router.patch('/:jobSeekerId/:skillId/level', authMiddleware, jobSeekerSkillsController.updateSkillLevel);

// Update multiple skills
router.put('/', authMiddleware, jobSeekerSkillsController.updateJobSeekerSkills);

export default router; 