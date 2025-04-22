import { Router } from 'express';
import { SkillController } from '../controllers/skill.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
const skillController = new SkillController();

// Public routes
router.get('/search', skillController.searchSkills);
router.get('/popular', skillController.getPopularSkills);

// Protected routes
router.post('/', authMiddleware, skillController.createSkill);
router.get('/', authMiddleware, skillController.getSkills);
router.get('/:id', authMiddleware, skillController.getSkill);
router.put('/:id', authMiddleware, skillController.updateSkill);
router.delete('/:id', authMiddleware, skillController.deleteSkill);

export default router; 