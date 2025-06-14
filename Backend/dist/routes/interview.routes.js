"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const interview_controller_1 = require("../controllers/interview.controller");
const authMiddleware_1 = require("../middleware/authMiddleware");
const role_1 = require("../middleware/role");
const router = (0, express_1.Router)();
// Get all interviews for a user (job seeker)
router.get('/user/:userId', authMiddleware_1.authenticate, interview_controller_1.getUserInterviews);
// Respond to an interview (job seeker)
router.post('/:interviewId/respond', authMiddleware_1.authenticate, interview_controller_1.respondToInterview);
// Schedule an interview (employer only)
router.post('/application/:applicationId/schedule', authMiddleware_1.authenticate, role_1.isEmployer, interview_controller_1.scheduleInterview);
// Cancel an interview (employer only)
router.post('/:interviewId/cancel', authMiddleware_1.authenticate, role_1.isEmployer, interview_controller_1.cancelInterview);
exports.default = router;
