"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const skillController_1 = require("../controllers/skillController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.get('/', skillController_1.getAllSkills);
router.get('/:id', skillController_1.getSkillById);
router.post('/', authMiddleware_1.authenticate, skillController_1.createSkill);
router.put('/:id', authMiddleware_1.authenticate, skillController_1.updateSkill);
router.delete('/:id', authMiddleware_1.authenticate, skillController_1.deleteSkill);
// User skills
router.get('/user/:userId', skillController_1.getUserSkills);
router.post('/user/:userId', authMiddleware_1.authenticate, skillController_1.addUserSkill);
router.delete('/user/:userId/:skillId', authMiddleware_1.authenticate, skillController_1.removeUserSkill);
exports.default = router;
