"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jobController_1 = require("../controllers/jobController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.get('/', jobController_1.getAllJobs);
router.get('/search', jobController_1.searchJobs);
router.get('/recommended', authMiddleware_1.authenticate, jobController_1.getRecommendedJobs);
router.get('/:id', jobController_1.getJobById);
router.post('/', authMiddleware_1.authenticate, jobController_1.createJob);
router.put('/:id', authMiddleware_1.authenticate, jobController_1.updateJob);
router.delete('/:id', authMiddleware_1.authenticate, jobController_1.deleteJob);
// Employer routes
router.get('/employer/:employerId', jobController_1.getJobsByEmployer);
exports.default = router;
