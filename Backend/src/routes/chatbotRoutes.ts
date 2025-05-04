import express from 'express';
import {
  chatWithBot,
  getChatHistory,
  queryCandidates,
  queryJobs,
} from '../controllers/chatbotController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/chat', authenticate, chatWithBot);
router.get('/history', authenticate, getChatHistory);
router.post('/query/candidates', authenticate, queryCandidates);
router.post('/query/jobs', authenticate, queryJobs);

export default router;