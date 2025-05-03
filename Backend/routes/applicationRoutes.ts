import express from 'express';
import {
  createApplication,
  getApplicationById,
  updateApplicationStatus,
  getUserApplications,
  getJobApplications,
  getApplicationMatchScore,
} from '../controllers/applicationController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/', authenticate, createApplication);
router.get('/:id', authenticate, getApplicationById);
router.put('/:id/status', authenticate, updateApplicationStatus);
router.get('/user/:userId', authenticate, getUserApplications);
router.get('/job/:jobId', authenticate, getJobApplications);
router.get('/:id/match-score', authenticate, getApplicationMatchScore);

export default router;