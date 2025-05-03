import express from 'express';
import {
  getPortfolio,
  createOrUpdatePortfolio,
  deletePortfolio,
} from '../controllers/portfolioController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/:userId', getPortfolio);
router.post('/', authenticate, createOrUpdatePortfolio);
router.delete('/', authenticate, deletePortfolio);

export default router;