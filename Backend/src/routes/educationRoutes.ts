import express from 'express';
import {
  createEducation,
  getEducations,
  updateEducation,
  deleteEducation,
} from '../controllers/educationController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/', authenticate, createEducation);
router.get('/:userId', getEducations);
router.put('/:id', authenticate, updateEducation);
router.delete('/:id', authenticate, deleteEducation);

export default router;

