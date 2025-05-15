import express from 'express';
import { getSystemAnalytics } from '../controllers/analyticsController';
import { authenticate } from '../middleware/authMiddleware';
import { authorizeAdmin } from '../middleware/auth';

const router = express.Router();

// Get system analytics (admin only)
router.get('/', authenticate, authorizeAdmin, getSystemAnalytics);

export default router; 