import { Router } from 'express';
import {
    generateCareerPath,
    getUserCareerPaths,
    getCareerPath,
    updateProgress,
    deleteCareerPath
 } from '../controllers/career-path.controller';
import { authenticate } from '../middleware/authMiddleware';

const router = Router();
router.use(authenticate);
// All routes require authentication
// Generate a new career path
router.post('/', generateCareerPath);

// Get all career paths for the authenticated user
router.get('/', getUserCareerPaths);

// Get a specific career path
router.get('/:id', getCareerPath);

// Update career path progress
router.patch('/:id/progress', updateProgress);

// Delete a career path
router.delete('/:id', deleteCareerPath);

export default router; 