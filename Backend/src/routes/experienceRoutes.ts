import express from 'express';
import {
  createExperience,
  getExperiences,
  updateExperience,
  deleteExperience,
} from '../controllers/experienceController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/', authenticate, createExperience);
router.get('/:userId', getExperiences);
router.put('/:id', authenticate, updateExperience);
router.delete('/:id', authenticate, deleteExperience);

export default router;