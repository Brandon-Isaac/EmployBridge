import express from 'express';
import {
  getAllSkills,
  getSkillById,
  createSkill,
  updateSkill,
  deleteSkill,
  getUserSkills,
  addUserSkill,
  removeUserSkill,
} from '../controllers/skillController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', getAllSkills);
router.get('/:id', getSkillById);
router.post('/', authenticate, createSkill);
router.put('/:id', authenticate, updateSkill);
router.delete('/:id', authenticate, deleteSkill);

// User skills
router.get('/user/:userId', getUserSkills);
router.post('/user/:userId', authenticate, addUserSkill);
router.delete('/user/:userId/:skillId', authenticate, removeUserSkill);

export default router;