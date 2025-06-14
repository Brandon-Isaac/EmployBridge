"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chatbotController_1 = require("../controllers/chatbotController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.post('/chat', authMiddleware_1.authenticate, chatbotController_1.chatWithBot);
router.get('/history', authMiddleware_1.authenticate, chatbotController_1.getChatHistory);
router.post('/query/candidates', authMiddleware_1.authenticate, chatbotController_1.queryCandidates);
router.post('/query/jobs', authMiddleware_1.authenticate, chatbotController_1.queryJobs);
router.delete('/history', authMiddleware_1.authenticate, chatbotController_1.clearHistory);
exports.default = router;
