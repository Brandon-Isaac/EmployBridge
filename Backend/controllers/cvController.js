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
exports.extractSkillsFromCV = exports.deleteCV = exports.getCV = exports.uploadCV = void 0;
const entities_1 = require("../entities");
const data_source_1 = require("../data-source");
const fs_1 = __importDefault(require("fs"));
const cvRepository = data_source_1.AppDataSource.getRepository(entities_1.CV);
const userRepository = data_source_1.AppDataSource.getRepository(entities_1.User);
// Helper function to extract skills from CV text (simplified example)
const extractSkillsFromText = (text) => {
    const commonSkills = [
        'JavaScript', 'TypeScript', 'React', 'Angular', 'Node.js',
        'Python', 'Java', 'C#', 'SQL', 'PostgreSQL', 'MongoDB',
        'HTML', 'CSS', 'AWS', 'Azure', 'Docker', 'Kubernetes',
        'Machine Learning', 'TensorFlow', 'PyTorch', 'Data Analysis'
    ];
    const foundSkills = commonSkills.filter(skill => text.toLowerCase().includes(skill.toLowerCase()));
    return foundSkills;
};
const uploadCV = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }
        const user = yield userRepository.findOne({ where: { id: userId } });
        if (!user) {
            // Clean up uploaded file
            fs_1.default.unlinkSync(req.file.path);
            return res.status(404).json({ message: 'User not found' });
        }
        // Check if user already has a CV
        const existingCV = yield cvRepository.findOne({ where: { user: { id: userId } } });
        if (existingCV) {
            // Delete old file
            if (fs_1.default.existsSync(existingCV.filePath)) {
                fs_1.default.unlinkSync(existingCV.filePath);
            }
            yield cvRepository.delete(existingCV.id);
        }
        // Read file content for skill extraction
        const fileContent = fs_1.default.readFileSync(req.file.path, 'utf-8');
        const extractedSkills = extractSkillsFromText(fileContent);
        const cv = new entities_1.CV();
        cv.user = user;
        cv.fileName = req.file.originalname;
        cv.filePath = req.file.path;
        cv.extractedSkills = extractedSkills;
        yield cvRepository.save(cv);
        res.status(201).json(cv);
    }
    catch (error) {
        if (req.file && fs_1.default.existsSync(req.file.path)) {
            fs_1.default.unlinkSync(req.file.path);
        }
        res.status(500).json({ message: 'Error uploading CV', error });
    }
});
exports.uploadCV = uploadCV;
const getCV = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const cv = yield cvRepository.findOne({
            where: { user: { id: userId } },
        });
        if (!cv) {
            return res.status(404).json({ message: 'CV not found' });
        }
        res.json(cv);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching CV', error });
    }
});
exports.getCV = getCV;
const deleteCV = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const cv = yield cvRepository.findOne({
            where: { user: { id: userId } },
        });
        if (!cv) {
            return res.status(404).json({ message: 'CV not found' });
        }
        if (fs_1.default.existsSync(cv.filePath)) {
            fs_1.default.unlinkSync(cv.filePath);
        }
        yield cvRepository.delete(cv.id);
        res.json({ message: 'CV deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting CV', error });
    }
});
exports.deleteCV = deleteCV;
const extractSkillsFromCV = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }
        // Read file content for skill extraction
        const fileContent = fs_1.default.readFileSync(req.file.path, 'utf-8');
        const extractedSkills = extractSkillsFromText(fileContent);
        // Clean up the uploaded file
        fs_1.default.unlinkSync(req.file.path);
        res.json({ skills: extractedSkills });
    }
    catch (error) {
        if (req.file && fs_1.default.existsSync(req.file.path)) {
            fs_1.default.unlinkSync(req.file.path);
        }
        res.status(500).json({ message: 'Error extracting skills from CV', error });
    }
});
exports.extractSkillsFromCV = extractSkillsFromCV;
