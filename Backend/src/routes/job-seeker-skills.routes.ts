import { Router } from 'express';
import { JobSeekerSkillsController } from '../controllers/job-seeker-skills.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
const jobSeekerSkillsController = new JobSeekerSkillsController();

// Get job seeker's skills
router.get('/', authMiddleware, jobSeekerSkillsController.getJobSeekerSkills);

// Add skill to job seeker
router.post('/:skillId', authMiddleware, jobSeekerSkillsController.addSkillToJobSeeker);

// Remove skill from job seeker
router.delete('/:skillId', authMiddleware, jobSeekerSkillsController.removeSkillFromJobSeeker);

// Update job seeker's skills (bulk update)
router.put('/', authMiddleware, jobSeekerSkillsController.updateJobSeekerSkills);

// Generate career path based on current skills
router.get('/career-path', authMiddleware, jobSeekerSkillsController.generateCareerPath);

export default router; 