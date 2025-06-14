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
exports.generateJobWithAI = exports.getRecommendedJobs = exports.searchJobs = exports.getJobsByEmployer = exports.deleteJob = exports.updateJob = exports.createJob = exports.getJobById = exports.getAllJobs = void 0;
const Job_1 = require("../entities/Job");
const User_1 = require("../entities/User");
const Skill_1 = require("../entities/Skill");
const data_source_1 = require("../data-source");
const typeorm_1 = require("typeorm");
const asyncHandler_1 = __importDefault(require("../middleware/asyncHandler"));
const generative_ai_1 = require("@google/generative-ai");
const jobRepository = data_source_1.AppDataSource.getRepository(Job_1.Job);
const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
const skillRepository = data_source_1.AppDataSource.getRepository(Skill_1.Skill);
// Initialize Gemini AI
const genAI = new generative_ai_1.GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
const getAllJobs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jobs = yield jobRepository.find({
            relations: ['employer', 'requiredSkills'],
        });
        res.json(jobs);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching jobs', error });
    }
});
exports.getAllJobs = getAllJobs;
exports.getJobById = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const job = yield jobRepository.findOne({
            where: { id },
            relations: ['employer', 'requiredSkills', 'applications'],
        });
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.json(job);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching job', error });
    }
}));
exports.createJob = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const { title, description, location, salary, employmentType, requiredSkillIds, deadline, } = req.body;
        const employer = yield userRepository.findOne({ where: { id: userId } });
        if (!employer) {
            return res.status(404).json({ message: 'Employer not found' });
        }
        const job = new Job_1.Job();
        job.title = title;
        job.description = description;
        job.location = location;
        if (salary)
            job.salary = salary;
        job.employmentType = employmentType;
        job.employer = employer;
        if (requiredSkillIds && requiredSkillIds.length > 0) {
            const skills = yield skillRepository.find({
                where: { id: (0, typeorm_1.In)(requiredSkillIds) },
            });
            job.requiredSkills = skills;
        }
        if (deadline)
            job.deadline = new Date(deadline);
        yield jobRepository.save(job);
        res.status(201).json(job);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating job', error });
    }
}));
exports.updateJob = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const userId = req.user.userId;
        const updateData = req.body;
        const job = yield jobRepository.findOne({
            where: { id },
            relations: ['employer', 'requiredSkills'],
        });
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        if (job.employer.id !== userId) {
            return res.status(403).json({ message: 'Not authorized to update this job' });
        }
        if (updateData.title)
            job.title = updateData.title;
        if (updateData.description)
            job.description = updateData.description;
        if (updateData.location)
            job.location = updateData.location;
        if (updateData.salary)
            job.salary = updateData.salary;
        if (updateData.employmentType)
            job.employmentType = updateData.employmentType;
        if (updateData.deadline)
            job.deadline = new Date(updateData.deadline);
        if (updateData.requiredSkillIds) {
            const skills = yield skillRepository.find({
                where: { id: (0, typeorm_1.In)(updateData.requiredSkillIds) },
            });
            job.requiredSkills = skills;
        }
        yield jobRepository.save(job);
        res.json(job);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating job', error });
    }
}));
exports.deleteJob = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const userId = req.user.userId;
        const job = yield jobRepository.findOne({
            where: { id },
            relations: ['employer'],
        });
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        if (job.employer.id !== userId) {
            return res.status(403).json({ message: 'Not authorized to delete this job' });
        }
        yield jobRepository.delete(id);
        res.json({ message: 'Job deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting job', error });
    }
}));
exports.getJobsByEmployer = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { employerId } = req.params;
        const jobs = yield jobRepository.find({
            where: { employer: { id: employerId } },
            relations: ['requiredSkills', 'applications'],
        });
        res.json(jobs);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching employer jobs', error });
    }
}));
exports.searchJobs = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { query, location, skills } = req.query;
        const where = {};
        if (query) {
            where.title = (0, typeorm_1.Like)(`%${query}%`);
        }
        if (location) {
            where.location = (0, typeorm_1.Like)(`%${location}%`);
        }
        const options = {
            where,
            relations: ['employer', 'requiredSkills'],
        };
        if (skills) {
            const skillIds = skills.split(',');
            options.where.requiredSkills = { id: (0, typeorm_1.In)(skillIds) };
        }
        const jobs = yield jobRepository.find(options);
        res.json(jobs);
    }
    catch (error) {
        res.status(500).json({ message: 'Error searching jobs', error });
    }
}));
exports.getRecommendedJobs = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        // Get user skills
        const user = yield userRepository.findOne({
            where: { id: userId },
            relations: ['skills'],
        });
        if (!user || !user.skills || user.skills.length === 0) {
            return res.json([]);
        }
        const userSkillIds = user.skills.map(skill => skill.id);
        // Find jobs that require at least one of the user's skills
        const jobs = yield jobRepository.find({
            where: {
                requiredSkills: { id: (0, typeorm_1.In)(userSkillIds) },
            },
            relations: ['employer', 'requiredSkills'],
        });
        // Calculate match score for each job
        const jobsWithScores = jobs.map(job => {
            const requiredSkillIds = job.requiredSkills.map(skill => skill.id);
            const matchingSkills = userSkillIds.filter(skillId => requiredSkillIds.includes(skillId));
            const matchScore = (matchingSkills.length / requiredSkillIds.length) * 100;
            return Object.assign(Object.assign({}, job), { matchScore: Math.round(matchScore * 10) / 10 });
        });
        // Sort by match score (highest first)
        jobsWithScores.sort((a, b) => b.matchScore - a.matchScore);
        res.json(jobsWithScores);
    }
    catch (error) {
        res.status(500).json({ message: 'Error getting recommended jobs', error });
    }
}));
exports.generateJobWithAI = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const { title, location, employmentType, salary } = req.body;
        // Verify user is an employer
        const employer = yield userRepository.findOne({ where: { id: userId } });
        if (!employer || employer.role !== 'employer') {
            return res.status(403).json({ message: 'Only employers can generate jobs' });
        }
        // Generate job description and skills using Gemini
        const prompt = `Generate a detailed job description and required skills for a ${title} position.
    Location: ${location}
    Employment Type: ${employmentType}
    Salary Range: ${salary}

    Return ONLY a JSON object (no markdown, no backticks) with this structure:
    {
      "description": "detailed job description",
      "skills": [
        {
          "name": "skill name",
          "description": "brief description of why this skill is needed",
          "category": "one of: Technical, Soft Skills, Domain Knowledge, Tools, Languages"
        }
      ]
    }`;
        const completion = yield model.generateContent(prompt);
        if (!completion.response.text()) {
            throw new Error('Failed to generate job details');
        }
        // Clean and parse the response
        const responseText = completion.response.text().replace(/```json\n?|\n?```/g, '').trim();
        const generatedData = JSON.parse(responseText);
        // Create or update skills in the database
        const skills = yield Promise.all(generatedData.skills.map((skillData) => __awaiter(void 0, void 0, void 0, function* () {
            let skill = yield skillRepository.findOne({
                where: { name: skillData.name }
            });
            if (!skill) {
                skill = new Skill_1.Skill();
                skill.name = skillData.name;
                skill.description = skillData.description;
                skill.category = skillData.category;
                yield skillRepository.save(skill);
            }
            return skill;
        })));
        // Create the job
        const job = new Job_1.Job();
        job.title = title;
        job.description = generatedData.description;
        job.location = location;
        job.salary = salary;
        job.employmentType = employmentType;
        job.employer = employer;
        job.requiredSkills = skills;
        yield jobRepository.save(job);
        res.status(201).json({
            job,
            generatedSkills: skills,
            message: 'Job generated successfully with AI'
        });
    }
    catch (error) {
        console.error('Error generating job:', error);
        res.status(500).json({
            message: 'Error generating job with AI',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}));
// export const generateCareerPath = asyncHandler(async (req: Request, res: Response) => {
//   try {
//     const userId = (req as any).user.userId;
//   }
//   const skills = await skillRepository.find({
//     where: {
//       id: In(userSkillIds)
//     }
//   }); 
//   const prompt = `Generate a career path for a user with the following skills: ${skills.join(', ')}`;
//   const completion = await model.generateContent(prompt);
//   const careerPath = completion.response.text();
//   res.json({ careerPath });
// } catch (error) {
//   res.status(500).json({ message: 'Error generating career path', error });
// }
// });
