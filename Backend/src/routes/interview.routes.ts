import { Router } from 'express';
import { InterviewController } from '../controllers/interview.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
const interviewController = new InterviewController();

// Apply auth middleware to all interview routes
router.use(authMiddleware);

// Employer routes
router.post('/schedule', interviewController.scheduleInterview);
router.put('/:id', interviewController.updateInterview);
router.put('/:id/cancel', interviewController.cancelInterview);
router.get('/employer', interviewController.getEmployerInterviews);

// Job Seeker routes
router.get('/job-seeker', interviewController.getJobSeekerInterviews);
router.get('/:id', interviewController.getInterviewDetails);

export default router; 