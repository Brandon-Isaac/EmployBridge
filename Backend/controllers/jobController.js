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
exports.getRecommendedJobs = exports.searchJobs = exports.getJobsByEmployer = exports.deleteJob = exports.updateJob = exports.createJob = exports.getJobById = exports.getAllJobs = void 0;
const entities_1 = require("../entities");
const data_source_1 = require("../data-source");
const typeorm_1 = require("typeorm");
const jobRepository = data_source_1.AppDataSource.getRepository(entities_1.Job);
const userRepository = data_source_1.AppDataSource.getRepository(entities_1.User);
const skillRepository = data_source_1.AppDataSource.getRepository(entities_1.Skill);
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
const getJobById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.getJobById = getJobById;
const createJob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const { title, description, location, salary, employmentType, requiredSkillIds, deadline, } = req.body;
        const employer = yield userRepository.findOne({ where: { id: userId } });
        if (!employer) {
            return res.status(404).json({ message: 'Employer not found' });
        }
        const job = new entities_1.Job();
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
});
exports.createJob = createJob;
const updateJob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.updateJob = updateJob;
const deleteJob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.deleteJob = deleteJob;
const getJobsByEmployer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.getJobsByEmployer = getJobsByEmployer;
const searchJobs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.searchJobs = searchJobs;
const getRecommendedJobs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.getRecommendedJobs = getRecommendedJobs;
