import { Router } from 'express';
import { AdminController } from '../controllers/admin.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
const adminController = new AdminController();

// Public routes
router.post('/register', adminController.register);
router.post('/login', adminController.login);

// Protected routes
router.use(authMiddleware);

// Auth routes
router.post('/logout', adminController.logout);

// User Management
router.get('/job-seekers', adminController.getJobSeekers);
router.get('/employers', adminController.getEmployers);
router.put('/users/:type/:id/deactivate', adminController.deactivateUser);
router.put('/users/:type/:id/activate', adminController.activateUser);

// Job Management
router.get('/jobs', adminController.getJobs);
router.put('/jobs/:id/deactivate', adminController.deactivateJob);
router.put('/jobs/:id/activate', adminController.activateJob);

// Company Management
router.get('/companies', adminController.getCompanies);
router.put('/companies/:id/deactivate', adminController.deactivateCompany);
router.put('/companies/:id/activate', adminController.activateCompany);

// System Statistics
router.get('/stats', adminController.getSystemStats);

export default router; 