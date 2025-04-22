import { Router } from 'express';
import { JobController } from '../controllers/job.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
const jobController = new JobController();

// Public routes
router.get('/search', jobController.searchJobs);
router.get('/:id', jobController.getJobDetails);

// Protected routes (employer only)
router.use(authMiddleware);
router.post('/', jobController.createJob);
router.get('/employer/jobs', jobController.getJobs);
router.get('/employer/jobs/:id', jobController.getJob);
router.put('/employer/jobs/:id', jobController.updateJob);
router.delete('/employer/jobs/:id', jobController.deleteJob);

export default router; 