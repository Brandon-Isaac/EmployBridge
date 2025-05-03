"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const applicationController_1 = require("../controllers/applicationController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.post('/', authMiddleware_1.authenticate, applicationController_1.createApplication);
router.get('/:id', authMiddleware_1.authenticate, applicationController_1.getApplicationById);
router.put('/:id/status', authMiddleware_1.authenticate, applicationController_1.updateApplicationStatus);
router.get('/user/:userId', authMiddleware_1.authenticate, applicationController_1.getUserApplications);
router.get('/job/:jobId', authMiddleware_1.authenticate, applicationController_1.getJobApplications);
router.get('/:id/match-score', authMiddleware_1.authenticate, applicationController_1.getApplicationMatchScore);
exports.default = router;
