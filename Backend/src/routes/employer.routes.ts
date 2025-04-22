import { Router } from 'express';
import { EmployerController } from '../controllers/employer.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
const employerController = new EmployerController();

// Public routes
router.post('/register', employerController.register);
router.post('/login', employerController.login);

// Protected routes
router.get('/profile', authMiddleware, employerController.getProfile);
router.put('/profile', authMiddleware, employerController.updateProfile);
router.put('/change-password', authMiddleware, employerController.changePassword);

export default router; 