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
exports.getApplicationMatchScore = exports.getJobApplications = exports.getUserApplications = exports.updateApplicationStatus = exports.getApplicationById = exports.createApplication = void 0;
const Application_1 = require("../entities/Application");
const Job_1 = require("../entities/Job");
const User_1 = require("../entities/User");
const data_source_1 = require("../data-source");
const Application_2 = require("../entities/Application");
const asyncHandler_1 = __importDefault(require("../middleware/asyncHandler"));
const applicationRepository = data_source_1.AppDataSource.getRepository(Application_1.Application);
const jobRepository = data_source_1.AppDataSource.getRepository(Job_1.Job);
const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
exports.createApplication = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userId = req.user.userId;
        const { jobId } = req.body;
        const user = yield userRepository.findOne({
            where: { id: userId },
            relations: ['skills', 'portfolio', 'cv'],
        });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const job = yield jobRepository.findOne({
            where: { id: jobId },
            relations: ['requiredSkills'],
        });
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        // Check if application already exists
        const existingApplication = yield applicationRepository.findOne({
            where: { user: { id: userId }, job: { id: jobId } },
        });
        if (existingApplication) {
            return res.status(400).json({ message: 'Application already exists' });
        }
        // Calculate match score
        const userSkillIds = ((_a = user.skills) === null || _a === void 0 ? void 0 : _a.map(skill => skill.id)) || [];
        const requiredSkillIds = job.requiredSkills.map(skill => skill.id);
        const matchingSkills = userSkillIds.filter(skillId => requiredSkillIds.includes(skillId));
        // Calculate match score as fraction of user's skills that match required skills
        const matchScore = userSkillIds.length > 0
            ? (matchingSkills.length / userSkillIds.length) * 100
            : 0;
        const application = new Application_1.Application();
        application.user = user;
        application.job = job;
        application.matchScore = Math.round(matchScore * 10) / 10; // Round to 1 decimal place
        yield applicationRepository.save(application);
        res.status(201).json(application);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating application', error });
    }
}));
exports.getApplicationById = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const application = yield applicationRepository.findOne({
            where: { id },
            relations: ['user', 'job', 'job.employer', 'job.requiredSkills'],
        });
        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }
        res.json(application);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching application', error });
    }
}));
exports.updateApplicationStatus = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const userId = req.user.userId;
        console.log('Received status:', status);
        console.log('Valid statuses:', Object.values(Application_2.ApplicationStatus));
        const application = yield applicationRepository.findOne({
            where: { id },
            relations: ['job', 'job.employer'],
        });
        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }
        // Check if the user is the employer who posted the job
        if (application.job.employer.id !== userId) {
            return res.status(403).json({ message: 'Not authorized to update this application' });
        }
        // Convert status to uppercase for case-insensitive comparison
        const normalizedStatus = status === null || status === void 0 ? void 0 : status.toUpperCase();
        // Map 'reviewed' to 'reviewing' for backward compatibility
        const statusMap = {
            'REVIEWED': Application_2.ApplicationStatus.REVIEWED,
            'PENDING': Application_2.ApplicationStatus.PENDING,
            'REVIEWING': Application_2.ApplicationStatus.REVIEWED,
            'INTERVIEW': Application_2.ApplicationStatus.INTERVIEW,
            'ACCEPTED': Application_2.ApplicationStatus.ACCEPTED,
            'REJECTED': Application_2.ApplicationStatus.REJECTED
        };
        const mappedStatus = statusMap[normalizedStatus];
        if (!mappedStatus) {
            return res.status(400).json({
                message: 'Invalid status',
                validStatuses: Object.values(Application_2.ApplicationStatus),
                receivedStatus: status
            });
        }
        application.status = mappedStatus;
        // If status is 'interview', set interview date
        if (mappedStatus === Application_2.ApplicationStatus.INTERVIEW && req.body.interviewDate) {
            application.interviewDate = new Date(req.body.interviewDate);
        }
        yield applicationRepository.save(application);
        res.json(application);
    }
    catch (error) {
        console.error('Error updating application status:', error);
        res.status(500).json({ message: 'Error updating application status', error });
    }
}));
exports.getUserApplications = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const applications = yield applicationRepository.find({
            where: { user: { id: userId } },
            relations: ['job', 'job.employer', 'job.requiredSkills'],
            order: { appliedAt: 'DESC' },
        });
        res.json(applications);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching user applications', error });
    }
}));
exports.getJobApplications = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { jobId } = req.params;
        const applications = yield applicationRepository.find({
            where: { job: { id: jobId } },
            relations: ['user', 'user.skills'],
            order: { matchScore: 'DESC' },
        });
        res.json(applications);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching job applications', error });
    }
}));
exports.getApplicationMatchScore = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const application = yield applicationRepository.findOne({
            where: { id },
            select: ['matchScore'],
        });
        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }
        res.json({ matchScore: application.matchScore });
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching match score', error });
    }
}));
