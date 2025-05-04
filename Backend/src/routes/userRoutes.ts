import express from 'express';
import {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  deleteUser,
  getAllUsers,
  getUserById,
  logoutUser,
  updateUserPassword,
  updateUserRole
} from '../controllers/userController';
import { authenticate, authorize } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/profile', authenticate, getUserProfile);
router.put('/profile', authenticate, updateUserProfile);
router.put('/profile/password', authenticate, updateUserPassword);
router.put('/profile/role', authenticate, authorize(['admin']), updateUserRole);
router.delete('/profile', authenticate, deleteUser);
router.post('/logout', authenticate, logoutUser);

// Admin routes
router.get('/', authenticate, authorize(['admin']), getAllUsers);
router.get('/:id', authenticate, authorize(['admin']), getUserById);

export default router;