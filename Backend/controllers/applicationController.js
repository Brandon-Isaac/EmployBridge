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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApplicationMatchScore = exports.getJobApplications = exports.getUserApplications = exports.updateApplicationStatus = exports.getApplicationById = exports.createApplication = void 0;
const entities_1 = require("../entities");
const data_source_1 = require("../data-source");
const Application_1 = require("../entities/Application");
const applicationRepository = data_source_1.AppDataSource.getRepository(entities_1.Application);
const jobRepository = data_source_1.AppDataSource.getRepository(entities_1.Job);
const userRepository = data_source_1.AppDataSource.getRepository(entities_1.User);
const createApplication = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const matchScore = (matchingSkills.length / requiredSkillIds.length) * 100;
        const application = new entities_1.Application();
        application.user = user;
        application.job = job;
        application.matchScore = Math.round(matchScore * 10) / 10; // Round to 1 decimal place
        yield applicationRepository.save(application);
        res.status(201).json(application);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating application', error });
    }
});
exports.createApplication = createApplication;
const getApplicationById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.getApplicationById = getApplicationById;
const updateApplicationStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const userId = req.user.userId;
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
        if (!Object.values(Application_1.ApplicationStatus).includes(status)) {
            return res.status(400).json({ message: 'Invalid status' });
        }
        application.status = status;
        // If status is 'interview', set interview date
        if (status === Application_1.ApplicationStatus.INTERVIEW && req.body.interviewDate) {
            application.interviewDate = new Date(req.body.interviewDate);
        }
        yield applicationRepository.save(application);
        res.json(application);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating application status', error });
    }
});
exports.updateApplicationStatus = updateApplicationStatus;
const getUserApplications = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.getUserApplications = getUserApplications;
const getJobApplications = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.getJobApplications = getJobApplications;
const getApplicationMatchScore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.getApplicationMatchScore = getApplicationMatchScore;
