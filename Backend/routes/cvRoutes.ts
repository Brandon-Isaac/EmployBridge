import express from 'express';
import {
  uploadCV,
  getCV,
  deleteCV,
  extractSkillsFromCV,
} from '../controllers/cvController';
import { authenticate } from '../middleware/authMiddleware';
import upload from '../middleware/uploadMiddleware';

const router = express.Router();

router.post('/upload', authenticate, upload.single('cv'), uploadCV);
router.get('/:userId', authenticate, getCV);
router.delete('/', authenticate, deleteCV);
router.post('/extract-skills', authenticate, upload.single('cv'), extractSkillsFromCV);

export default router;