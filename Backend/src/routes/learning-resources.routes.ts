import { Router } from 'express';
import { LearningResourcesController } from '../controllers/learning-resources.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
const learningResourcesController = new LearningResourcesController();

// Get learning resources based on all skills
router.get('/', authMiddleware, learningResourcesController.getLearningResources);

// Get learning resources for a specific skill
router.get('/skill/:skillId', authMiddleware, learningResourcesController.getLearningResourcesBySkill);

export default router; 