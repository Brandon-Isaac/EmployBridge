import { Router } from 'express';
import { 
  getUserInterviews, 
  respondToInterview, 
  scheduleInterview, 
  cancelInterview 
} from '../controllers/interview.controller';
import { authenticate } from '../middleware/authMiddleware';
import { isEmployer } from '../middleware/role';

const router = Router();

// Get all interviews for a user (job seeker)
router.get('/user/:userId', authenticate, getUserInterviews);

// Respond to an interview (job seeker)
router.post('/:interviewId/respond', authenticate, respondToInterview);

// Schedule an interview (employer only)
router.post('/application/:applicationId/schedule', 
  authenticate, 
  isEmployer, 
  scheduleInterview
);

// Cancel an interview (employer only)
router.post('/:interviewId/cancel', 
  authenticate, 
  isEmployer, 
  cancelInterview
);

export default router; 