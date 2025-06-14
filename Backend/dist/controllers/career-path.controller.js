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
exports.deleteCareerPath = exports.updateProgress = exports.getCareerPath = exports.getUserCareerPaths = exports.generateCareerPath = void 0;
const data_source_1 = require("../data-source");
const Careerpath_1 = require("../entities/Careerpath");
const User_1 = require("../entities/User");
const Skill_1 = require("../entities/Skill");
const generative_ai_1 = require("@google/generative-ai");
const dotenv_1 = __importDefault(require("dotenv"));
const asyncHandler_1 = __importDefault(require("../middleware/asyncHandler"));
dotenv_1.default.config();
const careerPathRepository = data_source_1.AppDataSource.getRepository(Careerpath_1.CareerPath);
const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
const skillRepository = data_source_1.AppDataSource.getRepository(Skill_1.Skill);
// Initialize Gemini AI client
const genAI = new generative_ai_1.GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
// Private function to generate career path using AI
const generateAICareerPath = (targetRole, currentRole, yearsOfExperience, currentSkills) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!process.env.GEMINI_API_KEY) {
            throw new Error('GEMINI_API_KEY is not configured');
        }
        const prompt = `
        Generate a detailed career path for transitioning from ${currentRole} to ${targetRole}.
        Current experience: ${yearsOfExperience} years
        Current skills: ${currentSkills.map(s => s.name).join(', ')}

        Please provide:
        1. A timeline with phases, activities, and milestones
        2. Required education and certifications
        3. Skills development plan
        4. Alternative career paths

        Format the response as a JSON object with the following structure:
        {
          "timeline": [
            {
              "phase": "string",
              "duration": "string",
              "activities": ["string"],
              "milestones": ["string"]
            }
          ],
          "education": [
            {
              "level": "string",
              "field": "string",
              "duration": "string",
              "requirements": ["string"]
            }
          ],
          "requiredSkills": {
            "current": ["string"],
            "missing": ["string"],
            "development": [
              {
                "skill": "string",
                "resources": ["string"],
                "timeline": "string"
              }
            ]
          },
          "alternativePaths": [
            {
              "role": "string",
              "description": "string",
              "requiredSkills": ["string"],
              "matchScore": number
            }
          ]
        }

        Ensure the response is valid JSON and follows the exact structure above.
      `;
        const result = yield model.generateContent(prompt);
        const response = result.response.text();
        if (!response) {
            throw new Error('Empty response from AI model');
        }
        try {
            // Clean the response string to ensure it's valid JSON
            const cleanedResponse = response.replace(/```json\n?|\n?```/g, '').trim();
            const parsedResponse = JSON.parse(cleanedResponse);
            // Validate the response structure
            if (!parsedResponse.timeline || !parsedResponse.education ||
                !parsedResponse.requiredSkills || !parsedResponse.alternativePaths) {
                throw new Error('Invalid response structure from AI model');
            }
            return parsedResponse;
        }
        catch (parseError) {
            console.error('Error parsing AI response:', parseError);
            console.error('Raw response:', response);
            throw new Error('Failed to parse AI response as valid JSON');
        }
    }
    catch (error) {
        console.error('Error generating AI career path:', error);
        if (error instanceof Error) {
            throw new Error(`Failed to generate career path: ${error.message}`);
        }
        throw new Error('Failed to generate career path: Unknown error');
    }
});
// Generate a new career path
exports.generateCareerPath = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { targetRole, currentRole, yearsOfExperience } = req.body;
    const userId = req.user.userId;
    // Get user and their skills
    const user = yield userRepository.findOne({
        where: { id: userId },
        relations: ['skills']
    });
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    // Generate career path using AI
    const careerPath = yield generateAICareerPath(targetRole, currentRole, yearsOfExperience, user.skills || []);
    // Convert string arrays to Skill objects
    const convertToSkills = (skillNames) => __awaiter(void 0, void 0, void 0, function* () {
        const skills = yield Promise.all(skillNames.map((name) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                // First try to find existing skill
                let skill = yield skillRepository.findOne({ where: { name } });
                if (!skill) {
                    // If skill doesn't exist, create it
                    skill = skillRepository.create({
                        name,
                        category: 'Technical', // Default category for AI-generated skills
                        description: `Skill required for ${targetRole} role`
                    });
                    yield skillRepository.save(skill);
                }
                return skill;
            }
            catch (error) {
                // If we get a unique constraint error, try to find the skill again
                if (error.code === '23505') { // PostgreSQL unique violation error code
                    const existingSkill = yield skillRepository.findOne({ where: { name } });
                    if (existingSkill) {
                        return existingSkill;
                    }
                }
                throw error; // Re-throw if it's a different error
            }
        })));
        return skills;
    });
    // Save the generated career path
    const newCareerPath = careerPathRepository.create({
        user,
        targetRole,
        currentRole,
        yearsOfExperience,
        timeline: careerPath.timeline,
        education: careerPath.education,
        requiredSkills: {
            current: yield convertToSkills(careerPath.requiredSkills.current),
            missing: yield convertToSkills(careerPath.requiredSkills.missing),
            development: yield Promise.all(careerPath.requiredSkills.development.map((dev) => __awaiter(void 0, void 0, void 0, function* () {
                return ({
                    skill: (yield convertToSkills([dev.skill]))[0],
                    resources: dev.resources,
                    timeline: dev.timeline
                });
            })))
        },
        alternativePaths: yield Promise.all(careerPath.alternativePaths.map((path) => __awaiter(void 0, void 0, void 0, function* () {
            return (Object.assign(Object.assign({}, path), { requiredSkills: yield convertToSkills(path.requiredSkills) }));
        })))
    });
    yield careerPathRepository.save(newCareerPath);
    return res.status(201).json(newCareerPath);
}));
// Get all career paths for a user
exports.getUserCareerPaths = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.user.userId;
    const careerPaths = yield careerPathRepository.find({
        where: { user: { id: userId } },
        order: { createdAt: 'DESC' }
    });
    return res.json(careerPaths);
}));
// Get a specific career path
exports.getCareerPath = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const userId = req.user.userId;
    const careerPath = yield careerPathRepository.findOne({
        where: { id, user: { id: userId } }
    });
    if (!careerPath) {
        return res.status(404).json({ message: 'Career path not found' });
    }
    return res.json(careerPath);
}));
// Update career path progress
exports.updateProgress = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { progress, isCompleted } = req.body;
    const userId = req.user.userId;
    const careerPath = yield careerPathRepository.findOne({
        where: { id, user: { id: userId } }
    });
    if (!careerPath) {
        return res.status(404).json({ message: 'Career path not found' });
    }
    careerPath.progress = progress;
    careerPath.isCompleted = isCompleted;
    yield careerPathRepository.save(careerPath);
    return res.json(careerPath);
}));
// Delete a career path
exports.deleteCareerPath = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const userId = req.user.userId;
    const careerPath = yield careerPathRepository.findOne({
        where: { id, user: { id: userId } }
    });
    if (!careerPath) {
        return res.status(404).json({ message: 'Career path not found' });
    }
    yield careerPathRepository.remove(careerPath);
    return res.status(204).send();
}));
