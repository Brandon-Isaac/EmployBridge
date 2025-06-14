"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const career_path_controller_1 = require("../controllers/career-path.controller");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.use(authMiddleware_1.authenticate);
// All routes require authentication
// Generate a new career path
router.post('/', career_path_controller_1.generateCareerPath);
// Get all career paths for the authenticated user
router.get('/', career_path_controller_1.getUserCareerPaths);
// Get a specific career path
router.get('/:id', career_path_controller_1.getCareerPath);
// Update career path progress
router.patch('/:id/progress', career_path_controller_1.updateProgress);
// Delete a career path
router.delete('/:id', career_path_controller_1.deleteCareerPath);
exports.default = router;
