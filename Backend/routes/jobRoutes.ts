import express from 'express';
import {
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
  getJobsByEmployer,
  searchJobs,
  getRecommendedJobs,
} from '../controllers/jobController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', getAllJobs);
router.get('/search', searchJobs);
router.get('/recommended', authenticate, getRecommendedJobs);
router.get('/:id', getJobById);
router.post('/', authenticate, createJob);
router.put('/:id', authenticate, updateJob);
router.delete('/:id', authenticate, deleteJob);

// Employer routes
router.get('/employer/:employerId', getJobsByEmployer);

export default router;