"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserRole = exports.updateUserPassword = exports.logoutUser = exports.getUserById = exports.getAllUsers = exports.deleteUser = exports.updateUserProfile = exports.getUserProfile = exports.loginUser = exports.registerUser = void 0;
const User_1 = require("../entities/User");
const data_source_1 = require("../data-source");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password, role, company, position, bio } = req.body;
        // Check if user already exists
        const existingUser = yield userRepository.findOne({ where: { email } });
        if (existingUser) {
            res.status(400).json({ message: 'User already exists' });
            return;
        }
        // Hash password
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        // Create new user
        const user = new User_1.User();
        user.name = name;
        user.email = email;
        user.password = hashedPassword;
        user.role = role || 'job_seeker';
        if (company)
            user.company = company;
        if (position)
            user.position = position;
        if (bio)
            user.bio = bio;
        yield userRepository.save(user);
        // Generate token
        const token = jsonwebtoken_1.default.sign({ userId: user.id, role: user.role }, JWT_SECRET, {
            expiresIn: '1d',
        });
        res.status(201).json({ user, token });
    }
    catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield userRepository.findOne({ where: { email } });
        if (!user) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }
        const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }
        const token = jsonwebtoken_1.default.sign({ userId: user.id, role: user.role }, JWT_SECRET, {
            expiresIn: '1d',
        });
        res.json({ user, token });
    }
    catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
});
exports.loginUser = loginUser;
const getUserProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const user = yield userRepository.findOne({
            where: { id: userId },
            relations: ['portfolio', 'cv'],
        });
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching user profile', error });
    }
});
exports.getUserProfile = getUserProfile;
const updateUserProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const { name, bio, company, position } = req.body;
        const user = yield userRepository.findOne({
            where: { id: userId },
            relations: ['portfolio', 'cv']
        });
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        if (name)
            user.name = name;
        if (bio)
            user.bio = bio;
        if (company)
            user.company = company;
        if (position)
            user.position = position;
        yield userRepository.save(user);
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating user profile', error });
    }
});
exports.updateUserProfile = updateUserProfile;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        yield userRepository.delete(userId);
        res.json({ message: 'User deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
});
exports.deleteUser = deleteUser;
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userRepository.find();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
});
exports.getAllUsers = getAllUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield userRepository.findOne({
            where: { id },
            relations: ['portfolio', 'cv'],
        });
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching user', error });
    }
});
exports.getUserById = getUserById;
const logoutUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Invalidate the token (if using a token blacklist or similar strategy)
        res.json({ message: 'User logged out successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error logging out', error });
    }
});
exports.logoutUser = logoutUser;
const updateUserPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const { currentPassword, newPassword } = req.body;
        const user = yield userRepository.findOne({ where: { id: userId } });
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        const isPasswordValid = yield bcrypt_1.default.compare(currentPassword, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ message: 'Current password is incorrect' });
            return;
        }
        const hashedNewPassword = yield bcrypt_1.default.hash(newPassword, 10);
        user.password = hashedNewPassword;
        yield userRepository.save(user);
        res.json({ message: 'Password updated successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating password', error });
    }
});
exports.updateUserPassword = updateUserPassword;
const updateUserRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const { role } = req.body;
        const user = yield userRepository.findOne({ where: { id: userId } });
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        user.role = role;
        yield userRepository.save(user);
        res.json({ message: 'User role updated successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating user role', error });
    }
});
exports.updateUserRole = updateUserRole;
