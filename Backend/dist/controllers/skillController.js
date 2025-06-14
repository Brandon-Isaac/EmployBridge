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
exports.generateSkills = exports.removeUserSkill = exports.addUserSkill = exports.getUserSkills = exports.deleteSkill = exports.updateSkill = exports.createSkill = exports.getSkillById = exports.getAllSkills = void 0;
const Skill_1 = require("../entities/Skill");
const User_1 = require("../entities/User");
const data_source_1 = require("../data-source");
const generative_ai_1 = require("@google/generative-ai");
const dotenv_1 = __importDefault(require("dotenv"));
const typeorm_1 = require("typeorm");
dotenv_1.default.config();
const genAI = new generative_ai_1.GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
const skillRepository = data_source_1.AppDataSource.getRepository(Skill_1.Skill);
const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
const getAllSkills = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skills = yield skillRepository.find();
        res.json(skills);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching skills', error });
    }
});
exports.getAllSkills = getAllSkills;
const getSkillById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const skill = yield skillRepository.findOne({
            where: { id },
            relations: ['users', 'jobs'],
        });
        if (!skill) {
            res.status(404).json({ message: 'Skill not found' });
            return;
        }
        res.json(skill);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching skill', error });
    }
});
exports.getSkillById = getSkillById;
const createSkill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, category, description } = req.body;
        const skill = new Skill_1.Skill();
        skill.name = name;
        skill.category = category;
        if (description)
            skill.description = description;
        yield skillRepository.save(skill);
        res.status(201).json(skill);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating skill', error });
    }
});
exports.createSkill = createSkill;
const updateSkill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, category, description } = req.body;
        const skill = yield skillRepository.findOne({ where: { id } });
        if (!skill) {
            res.status(404).json({ message: 'Skill not found' });
            return;
        }
        if (name)
            skill.name = name;
        if (category)
            skill.category = category;
        if (description)
            skill.description = description;
        yield skillRepository.save(skill);
        res.json(skill);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating skill', error });
    }
});
exports.updateSkill = updateSkill;
const deleteSkill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield skillRepository.delete(id);
        res.json({ message: 'Skill deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting skill', error });
    }
});
exports.deleteSkill = deleteSkill;
const getUserSkills = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const user = yield userRepository.findOne({
            where: { id: userId },
            relations: ['skills'],
        });
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.json(user.skills);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching user skills', error });
    }
});
exports.getUserSkills = getUserSkills;
const addUserSkill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const { skillId } = req.body;
        const user = yield userRepository.findOne({
            where: { id: userId },
            relations: ['skills'],
        });
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        const skill = yield skillRepository.findOne({ where: { id: skillId } });
        if (!skill) {
            res.status(404).json({ message: 'Skill not found' });
            return;
        }
        if (!user.skills)
            user.skills = [];
        if (!user.skills.some(s => s.id === skillId)) {
            user.skills.push(skill);
            yield userRepository.save(user);
        }
        res.json(user.skills);
    }
    catch (error) {
        res.status(500).json({ message: 'Error adding user skill', error });
    }
});
exports.addUserSkill = addUserSkill;
const removeUserSkill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { userId, skillId } = req.params;
        const user = yield userRepository.findOne({
            where: { id: userId },
            relations: ['skills'],
        });
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        user.skills = ((_a = user.skills) === null || _a === void 0 ? void 0 : _a.filter(skill => skill.id !== skillId)) || [];
        yield userRepository.save(user);
        res.json(user.skills);
    }
    catch (error) {
        res.status(500).json({ message: 'Error removing user skill', error });
    }
});
exports.removeUserSkill = removeUserSkill;
const generateSkills = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { jobTitle, jobDescription } = req.body;
        if (!jobTitle) {
            res.status(400).json({ message: 'Job title is required' });
            return;
        }
        const prompt = `Given the following job title${jobDescription ? ' and description' : ''}, generate the top 5 most important technical skills required for this position. 
    Return the response as a JSON array of skill objects with name, category, and description fields.
    Job Title: ${jobTitle}
    ${jobDescription ? `Job Description: ${jobDescription}` : ''}
    
    Example response format:
    [
      {
        "name": "JavaScript",
        "category": "Programming Language",
        "description": "Core programming language for web development"
      }
    ]`;
        const result = yield model.generateContent(prompt);
        const response = yield result.response;
        const text = response.text();
        // Clean the response text to ensure it's valid JSON
        const cleanedText = text.replace(/```json\n?|\n?```/g, '').trim();
        const suggestedSkills = JSON.parse(cleanedText);
        // Check if skills already exist in database, if not create them
        const existingSkills = yield skillRepository.find({
            where: { name: (0, typeorm_1.In)(suggestedSkills.map((s) => s.name)) }
        });
        const existingSkillNames = existingSkills.map(s => s.name);
        const newSkills = suggestedSkills.filter((s) => !existingSkillNames.includes(s.name));
        if (newSkills.length > 0) {
            const skillsToCreate = newSkills.map((skill) => {
                const newSkill = new Skill_1.Skill();
                newSkill.name = skill.name;
                newSkill.category = skill.category;
                newSkill.description = skill.description;
                return newSkill;
            });
            yield skillRepository.save(skillsToCreate);
        }
        // Return both existing and newly created skills
        const allSkills = yield skillRepository.find({
            where: { name: (0, typeorm_1.In)(suggestedSkills.map((s) => s.name)) }
        });
        res.json({
            message: 'Skills generated successfully',
            skills: allSkills,
            isNew: newSkills.length > 0
        });
    }
    catch (error) {
        console.error('Error generating skills:', error);
        res.status(500).json({
            message: 'Error generating skills',
            error: (error === null || error === void 0 ? void 0 : error.message) || 'Unknown error occurred'
        });
    }
});
exports.generateSkills = generateSkills;
