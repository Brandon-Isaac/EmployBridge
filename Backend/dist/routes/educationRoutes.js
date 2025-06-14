"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const educationController_1 = require("../controllers/educationController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.post('/', authMiddleware_1.authenticate, educationController_1.createEducation);
router.get('/:userId', educationController_1.getEducations);
router.put('/:id', authMiddleware_1.authenticate, educationController_1.updateEducation);
router.delete('/:id', authMiddleware_1.authenticate, educationController_1.deleteEducation);
exports.default = router;
