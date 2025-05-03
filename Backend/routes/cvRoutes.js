"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cvController_1 = require("../controllers/cvController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const uploadMiddleware_1 = __importDefault(require("../middleware/uploadMiddleware"));
const router = express_1.default.Router();
router.post('/upload', authMiddleware_1.authenticate, uploadMiddleware_1.default.single('cv'), cvController_1.uploadCV);
router.get('/:userId', authMiddleware_1.authenticate, cvController_1.getCV);
router.delete('/', authMiddleware_1.authenticate, cvController_1.deleteCV);
router.post('/extract-skills', authMiddleware_1.authenticate, uploadMiddleware_1.default.single('cv'), cvController_1.extractSkillsFromCV);
exports.default = router;
