import { Router } from 'express';
import { GeminiController } from '../controllers/gemini.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
const geminiController = new GeminiController();

router.post('/generate-career-path', authMiddleware, geminiController.generateCareerPath);

export default router; 