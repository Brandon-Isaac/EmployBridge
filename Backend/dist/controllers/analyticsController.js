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
exports.getSystemAnalytics = void 0;
const data_source_1 = require("../data-source");
const User_1 = require("../entities/User");
const Job_1 = require("../entities/Job");
const Application_1 = require("../entities/Application");
const CV_1 = require("../entities/CV");
const typeorm_1 = require("typeorm");
const asyncHandler_1 = __importDefault(require("../middleware/asyncHandler"));
const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
const jobRepository = data_source_1.AppDataSource.getRepository(Job_1.Job);
const applicationRepository = data_source_1.AppDataSource.getRepository(Application_1.Application);
const cvRepository = data_source_1.AppDataSource.getRepository(CV_1.CV);
exports.getSystemAnalytics = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Get total users and user types
        const totalUsers = yield userRepository.count();
        const jobSeekers = yield userRepository.count({ where: { role: User_1.UserRole.JOB_SEEKER } });
        const employers = yield userRepository.count({ where: { role: User_1.UserRole.EMPLOYER } });
        const admins = yield userRepository.count({ where: { role: User_1.UserRole.ADMIN } });
        // Get total generations and types
        const totalGenerations = yield cvRepository.count();
        const cvGenerations = yield cvRepository.count({ where: { type: CV_1.CVType.CV } });
        const coverLetterGenerations = yield cvRepository.count({ where: { type: CV_1.CVType.COVER_LETTER } });
        const resumeGenerations = yield cvRepository.count({ where: { type: CV_1.CVType.RESUME } });
        // Get total CVs and their status
        const totalCVs = yield cvRepository.count();
        const draftCVs = yield cvRepository.count({ where: { status: CV_1.CVStatus.DRAFT } });
        const publishedCVs = yield cvRepository.count({ where: { status: CV_1.CVStatus.PUBLISHED } });
        const archivedCVs = yield cvRepository.count({ where: { status: CV_1.CVStatus.ARCHIVED } });
        // Get total jobs and applications
        const totalJobs = yield jobRepository.count();
        const totalApplications = yield applicationRepository.count();
        // Get recent activity (last 30 days)
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        const recentUsers = yield userRepository.count({
            where: {
                createdAt: (0, typeorm_1.MoreThanOrEqual)(thirtyDaysAgo)
            }
        });
        const recentJobs = yield jobRepository.count({
            where: {
                postedAt: (0, typeorm_1.MoreThanOrEqual)(thirtyDaysAgo)
            }
        });
        const recentApplications = yield applicationRepository.count({
            where: {
                appliedAt: (0, typeorm_1.MoreThanOrEqual)(thirtyDaysAgo)
            }
        });
        // Compile analytics data
        const analyticsData = {
            totalUsers,
            userTypes: {
                jobSeekers,
                employers,
                admins
            },
            totalGenerations,
            generationsByType: {
                cv: cvGenerations,
                coverLetter: coverLetterGenerations,
                resume: resumeGenerations
            },
            totalCVs,
            cvsByStatus: {
                draft: draftCVs,
                published: publishedCVs,
                archived: archivedCVs
            },
            jobs: {
                total: totalJobs,
                recent: recentJobs
            },
            applications: {
                total: totalApplications,
                recent: recentApplications
            },
            recentActivity: {
                newUsers: recentUsers,
                newJobs: recentJobs,
                newApplications: recentApplications
            }
        };
        res.json(analyticsData);
    }
    catch (error) {
        console.error('Error fetching analytics:', error);
        res.status(500).json({ message: 'Error fetching analytics data', error });
    }
}));
