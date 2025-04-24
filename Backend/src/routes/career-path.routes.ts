import { Router } from 'express';
import { CareerPathController } from '../controllers/career-path.controller';
import { authMiddleware } from '../middleware/auth-middleware';

const router = Router();
const careerPathController = new CareerPathController();

router.use(authMiddleware);

// Generate a career path based on AI prompt
router.post('/generate', careerPathController.generateCareerPath);

// Get all career paths
router.get('/', careerPathController.getCareerPaths);

// Update career path progress
router.patch('/:id/progress', careerPathController.updateProgress);

export default router; 