import { Router } from 'express';
import { JobSeekerController } from '../controllers/job-seeker.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import jobSeekerSkillsRoutes from './job-seeker-skills.routes';

const router = Router();
const jobSeekerController = new JobSeekerController();

// Public routes
router.post('/register', jobSeekerController.register.bind(jobSeekerController));
router.post('/login', jobSeekerController.login.bind(jobSeekerController));

// Protected routes
router.get('/profile', authMiddleware, jobSeekerController.getProfile.bind(jobSeekerController));
router.put('/profile', authMiddleware, jobSeekerController.updateProfile.bind(jobSeekerController));
router.put('/change-password', authMiddleware, jobSeekerController.changePassword.bind(jobSeekerController));

// Job seeker skills routes
router.use('/skills', authMiddleware, jobSeekerSkillsRoutes);

export default router; 