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
exports.queryJobs = exports.queryCandidates = exports.clearHistory = exports.getChatHistory = exports.chatWithBot = void 0;
const generative_ai_1 = require("@google/generative-ai");
const chatMessage_1 = require("../entities/chatMessage");
const User_1 = require("../entities/User");
const Job_1 = require("../entities/Job");
const asyncHandler_1 = __importDefault(require("../middleware/asyncHandler"));
const Application_1 = require("../entities/Application");
const Skill_1 = require("../entities/Skill");
const data_source_1 = require("../data-source");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const chatMessageRepository = data_source_1.AppDataSource.getRepository(chatMessage_1.ChatMessage);
const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
const jobRepository = data_source_1.AppDataSource.getRepository(Job_1.Job);
const applicationRepository = data_source_1.AppDataSource.getRepository(Application_1.Application);
const skillRepository = data_source_1.AppDataSource.getRepository(Skill_1.Skill);
// Initialize Gemini AI
const genAI = new generative_ai_1.GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
exports.chatWithBot = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    try {
        const userId = req.user.userId;
        const { message } = req.body;
        if (!message || typeof message !== 'string') {
            return res.status(400).json({ message: 'Invalid message format' });
        }
        // Get user details
        const user = yield userRepository.findOne({
            where: { id: userId },
            relations: ['skills', 'experiences', 'educations', 'applications', 'applications.job'],
        });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Save user message to database
        const userMessage = new chatMessage_1.ChatMessage();
        userMessage.content = message;
        userMessage.isFromUser = true;
        userMessage.user = user;
        yield chatMessageRepository.save(userMessage);
        // Get recent chat history (last 5 messages)
        const chatHistory = yield chatMessageRepository.find({
            where: { user: { id: userId } },
            order: { timestamp: 'DESC' },
            take: 5,
        });
        // Prepare context based on user role
        let context = '';
        if (user.role === 'job_seeker') {
            context = `User is a job seeker with the following details:
      - Name: ${user.name}
      - Skills: ${((_a = user.skills) === null || _a === void 0 ? void 0 : _a.map(skill => skill.name).join(', ')) || 'None'}
      - Experience: ${((_b = user.experiences) === null || _b === void 0 ? void 0 : _b.length) || 0} positions
      - Education: ${((_c = user.educations) === null || _c === void 0 ? void 0 : _c.length) || 0} degrees
      - Applications: ${((_d = user.applications) === null || _d === void 0 ? void 0 : _d.length) || 0} job applications`;
        }
        else if (user.role === 'employer') {
            // Get employer's posted jobs
            const jobs = yield jobRepository.find({
                where: { employer: { id: userId } },
                relations: ['applications', 'requiredSkills'],
            });
            context = `User is an employer with the following details:
      - Company: ${user.company || 'Not specified'}
      - Position: ${user.position || 'Not specified'}
      - Posted Jobs: ${jobs.length}
      - Total Applications: ${jobs.reduce((acc, job) => { var _a, _b; return acc + ((_b = (_a = job.applications) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0); }, 0)}`;
        }
        // Prepare system prompt based on user role
        const systemPrompt = user.role === 'job_seeker'
            ? `You are a career assistant for the SkillMatch AI platform. Help the job seeker with:
         - Job search advice
         - Application tips
         - Career guidance
         - Skill development
         - Interview preparation
         - Explaining their application statuses
        Use their profile details to provide personalized advice.
        Format your responses in paragraph format and plain text without markdown formatting.
        Keep your responses concise and to the point, maximum 30 words.`
            : `You are a hiring assistant for the SkillMatch AI platform. Help the employer with:
         - Candidate search
         - Job posting optimization
         - Application review
         - Interview scheduling
         - Hiring analytics
        Use their company and job posting details to provide personalized advice.
        Format your responses in paragraph format and plain text without markdown formatting.
        Keep your responses concise and to the point, maximum 30 words.`;
        // Prepare chat history for Gemini
        const chat = model.startChat({
            history: [
                { role: 'user', parts: [{ text: systemPrompt }] },
                { role: 'model', parts: [{ text: 'I understand my role and will help accordingly.' }] },
                { role: 'user', parts: [{ text: `Current context: ${context}` }] },
                { role: 'model', parts: [{ text: 'I have noted the context and will use it in my responses.' }] },
                ...chatHistory.reverse().map(msg => ({
                    role: msg.isFromUser ? 'user' : 'model',
                    parts: [{ text: msg.content }]
                }))
            ],
        });
        // Get response from Gemini
        const result = yield model.generateContent(message);
        let botResponse = result.response.text();
        // Clean up any markdown formatting from the response
        botResponse = botResponse
            .replace(/```[\s\S]*?```/g, '') // Remove code blocks
            .replace(/`([^`]+)`/g, '$1') // Remove inline code
            .replace(/\*\*([^*]+)\*\*/g, '$1') // Remove bold
            .replace(/\*([^*]+)\*/g, '$1') // Remove italic
            .replace(/#{1,6}\s/g, '') // Remove headers
            .replace(/\n{3,}/g, '\n\n') // Normalize multiple newlines
            .trim();
        // Limit response to 30 words
        // const words = botResponse.split(/\s+/);
        // if (words.length > 30) {
        //   botResponse = words.slice(0, 30).join(' ') + '...';
        // }
        // Save bot response to database
        const botMessage = new chatMessage_1.ChatMessage();
        botMessage.content = botResponse;
        botMessage.isFromUser = false;
        botMessage.user = user;
        yield chatMessageRepository.save(botMessage);
        res.json({
            response: botResponse,
            context: Object.assign({ role: user.role, name: user.name }, (user.role === 'job_seeker' ? {
                skills: (_e = user.skills) === null || _e === void 0 ? void 0 : _e.map(skill => skill.name),
                applicationCount: (_f = user.applications) === null || _f === void 0 ? void 0 : _f.length,
            } : {
                company: user.company,
                jobCount: yield jobRepository.count({ where: { employer: { id: userId } } }),
            })),
        });
    }
    catch (error) {
        console.error('Error in chatbot:', error);
        // Handle Gemini API errors
        if ((_g = error === null || error === void 0 ? void 0 : error.message) === null || _g === void 0 ? void 0 : _g.includes('API key')) {
            return res.status(401).json({
                message: 'Invalid API configuration. Please contact support.',
                error: 'Invalid API key'
            });
        }
        // Handle rate limit errors
        if ((_h = error === null || error === void 0 ? void 0 : error.message) === null || _h === void 0 ? void 0 : _h.includes('quota')) {
            return res.status(429).json({
                message: 'Too many requests. Please try again later.',
                error: 'Rate limit exceeded'
            });
        }
        // Handle other errors
        res.status(500).json({
            message: 'Error processing chat message',
            error: (error === null || error === void 0 ? void 0 : error.message) || 'Unknown error occurred'
        });
    }
}));
exports.getChatHistory = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const { limit = 20 } = req.query;
        const messages = yield chatMessageRepository.find({
            where: { user: { id: userId } },
            order: { timestamp: 'ASC' },
            take: Number(limit),
        });
        res.json(messages);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching chat history', error });
    }
}));
exports.clearHistory = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        yield chatMessageRepository.delete({ user: { id: userId } });
        res.json({ message: 'Chat history cleared' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error clearing chat history', error });
    }
}));
// Specialized query functions for different user types
exports.queryCandidates = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const { query } = req.body;
        // Verify user is an employer
        const user = yield userRepository.findOne({ where: { id: userId } });
        if (!user || user.role !== 'employer') {
            return res.status(403).json({ message: 'Only employers can query candidates' });
        }
        // Parse the natural language query
        const prompt = `Convert this natural language query into structured filters for candidate search:
    "${query}"
    
    Return ONLY a JSON object (no markdown, no backticks) with possible filters like:
    {
      "skills": [],
      "minExperience": null,
      "educationLevel": null,
      "location": null
    }`;
        const completion = yield model.generateContent(prompt);
        if (!completion.response.text()) {
            throw new Error('Completion message content is null or undefined');
        }
        // Clean the response text to ensure it's valid JSON
        const responseText = completion.response.text().replace(/```json\n?|\n?```/g, '').trim();
        const filters = JSON.parse(responseText);
        // Build TypeORM query based on filters
        const queryBuilder = userRepository.createQueryBuilder('user')
            .leftJoinAndSelect('user.skills', 'skills')
            .leftJoinAndSelect('user.educations', 'educations')
            .leftJoinAndSelect('user.experiences', 'experiences')
            .where('user.role = :role', { role: 'job_seeker' });
        if (filters.skills && filters.skills.length > 0) {
            queryBuilder.andWhere('skills.name IN (:...skills)', { skills: filters.skills });
        }
        if (filters.minExperience) {
            queryBuilder.andWhere('(SELECT COUNT(*) FROM experience WHERE experience.userId = user.id) >= :minExp', {
                minExp: filters.minExperience,
            });
        }
        if (filters.educationLevel) {
            queryBuilder.andWhere('educations.degree LIKE :degree', { degree: `%${filters.educationLevel}%` });
        }
        if (filters.location) {
            queryBuilder.andWhere('user.location LIKE :location', { location: `%${filters.location}%` });
        }
        const candidates = yield queryBuilder.getMany();
        // Format response with AI
        const responsePrompt = `Summarize these ${candidates.length} candidates found with filters: ${JSON.stringify(filters)}.
    Highlight key statistics and notable candidates.`;
        const responseCompletion = yield model.generateContent(responsePrompt);
        res.json({
            summary: responseCompletion.response.text(),
            candidates: candidates.map(candidate => {
                var _a, _b, _c;
                return ({
                    id: candidate.id,
                    name: candidate.name,
                    skills: (_a = candidate.skills) === null || _a === void 0 ? void 0 : _a.map(skill => skill.name),
                    experienceCount: (_b = candidate.experiences) === null || _b === void 0 ? void 0 : _b.length,
                    education: (_c = candidate.educations) === null || _c === void 0 ? void 0 : _c.map(edu => edu.degree),
                });
            }),
            filters,
        });
    }
    catch (error) {
        console.error('Error querying candidates:', error);
        res.status(500).json({ message: 'Error querying candidates', error });
    }
}));
exports.queryJobs = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userId = req.user.userId;
        const { query } = req.body;
        // Verify user is a job seeker
        const user = yield userRepository.findOne({ where: { id: userId } });
        if (!user || user.role !== 'job_seeker') {
            return res.status(403).json({ message: 'Only job seekers can query jobs' });
        }
        // Parse the natural language query
        const prompt = `Convert this job search query into structured filters:
    "${query}"
    
    Return ONLY a JSON object (no markdown, no backticks) with possible filters like:
    {
      "skills": [],
      "jobTitle": null,
      "location": null,
      "employmentType": null,
      "experienceLevel": null
    }`;
        const completion = yield model.generateContent(prompt);
        if (!completion.response.text()) {
            throw new Error('Completion message content is null or undefined');
        }
        // Clean the response text to ensure it's valid JSON
        const responseText = completion.response.text().replace(/```json\n?|\n?```/g, '').trim();
        const filters = JSON.parse(responseText);
        // Build TypeORM query
        const queryBuilder = jobRepository.createQueryBuilder('job')
            .leftJoinAndSelect('job.requiredSkills', 'skills')
            .leftJoinAndSelect('job.employer', 'employer');
        if (filters.skills && filters.skills.length > 0) {
            queryBuilder.andWhere('skills.name IN (:...skills)', { skills: filters.skills });
        }
        if (filters.jobTitle) {
            queryBuilder.andWhere('job.title LIKE :title', { title: `%${filters.jobTitle}%` });
        }
        if (filters.location) {
            queryBuilder.andWhere('job.location LIKE :location', { location: `%${filters.location}%` });
        }
        if (filters.employmentType) {
            queryBuilder.andWhere('job.employmentType = :type', { type: filters.employmentType });
        }
        if (filters.experienceLevel) {
            queryBuilder.andWhere('job.experienceLevel = :level', { level: filters.experienceLevel });
        }
        const jobs = yield queryBuilder.getMany();
        // Calculate match score for each job based on user skills
        const userSkills = ((_a = user.skills) === null || _a === void 0 ? void 0 : _a.map(skill => skill.name)) || [];
        const jobsWithScores = jobs.map(job => {
            var _a;
            const requiredSkills = ((_a = job.requiredSkills) === null || _a === void 0 ? void 0 : _a.map(skill => skill.name)) || [];
            const matchingSkills = userSkills.filter(skill => requiredSkills.includes(skill));
            const matchScore = requiredSkills.length > 0
                ? (matchingSkills.length / requiredSkills.length) * 100
                : 0;
            return Object.assign(Object.assign({}, job), { matchScore: Math.round(matchScore * 10) / 10 });
        }).sort((a, b) => b.matchScore - a.matchScore);
        // Format response with AI
        const responsePrompt = `Summarize these ${jobsWithScores.length} jobs found with filters: ${JSON.stringify(filters)}.
    The job seeker has these skills: ${userSkills.join(', ')}.
    Highlight best matches and interesting opportunities.`;
        const responseCompletion = yield model.generateContent(responsePrompt);
        res.json({
            summary: responseCompletion.response.text(),
            jobs: jobsWithScores,
            filters,
        });
    }
    catch (error) {
        console.error('Error querying jobs:', error);
        res.status(500).json({ message: 'Error querying jobs', error });
    }
}));
