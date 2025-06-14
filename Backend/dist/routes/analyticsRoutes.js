"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const analyticsController_1 = require("../controllers/analyticsController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
// Get system analytics (admin only)
router.get('/', authMiddleware_1.authenticate, auth_1.authorizeAdmin, analyticsController_1.getSystemAnalytics);
exports.default = router;
