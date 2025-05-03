"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.post('/register', userController_1.registerUser);
router.post('/login', userController_1.loginUser);
router.get('/profile', authMiddleware_1.authenticate, userController_1.getUserProfile);
router.put('/profile', authMiddleware_1.authenticate, userController_1.updateUserProfile);
router.delete('/profile', authMiddleware_1.authenticate, userController_1.deleteUser);
// Admin routes
router.get('/', authMiddleware_1.authenticate, (0, authMiddleware_1.authorize)(['admin']), userController_1.getAllUsers);
router.get('/:id', authMiddleware_1.authenticate, (0, authMiddleware_1.authorize)(['admin']), userController_1.getUserById);
exports.default = router;
