"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const portfolioController_1 = require("../controllers/portfolioController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.get('/:userId', portfolioController_1.getPortfolio);
router.post('/', authMiddleware_1.authenticate, portfolioController_1.createOrUpdatePortfolio);
router.delete('/', authMiddleware_1.authenticate, portfolioController_1.deletePortfolio);
exports.default = router;
