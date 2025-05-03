import express from 'express';
import {
  uploadCV,
  getCV,
  deleteCV,
  extractSkillsFromCV,
  generateAICV,
  downloadCV,
} from '../controllers/cvController';
import { authenticate } from '../middleware/authMiddleware';
import upload from '../middleware/uploadMiddleware';

const router = express.Router();

router.post('/upload', authenticate, upload.single('cv'), uploadCV);
router.get('/:userId', authenticate, getCV);
router.delete('/', authenticate, deleteCV);
router.post('/extract-skills', authenticate, upload.single('cv'), extractSkillsFromCV);
router.post('/generate', authenticate, generateAICV);
router.get('/download/:id', authenticate, downloadCV);

export default router;