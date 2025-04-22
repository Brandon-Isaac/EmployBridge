import { Router } from 'express';
import { EmployerController } from '../controllers/employer.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
const employerController = new EmployerController();

// Public routes
router.post('/register', employerController.register);
router.post('/login', employerController.login);

// Protected routes
router.use(authMiddleware);
router.post('/logout', employerController.logout);
router.get('/profile', employerController.getProfile);
router.put('/profile', employerController.updateProfile);
router.put('/change-password', employerController.changePassword);

export default router; 