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
exports.cancelInterview = exports.scheduleInterview = exports.respondToInterview = exports.getUserInterviews = void 0;
const Interview_1 = require("../entities/Interview");
const Application_1 = require("../entities/Application");
const data_source_1 = require("../data-source");
const asyncHandler_1 = __importDefault(require("../middleware/asyncHandler"));
const interviewRepository = data_source_1.AppDataSource.getRepository(Interview_1.Interview);
const applicationRepository = data_source_1.AppDataSource.getRepository(Application_1.Application);
exports.getUserInterviews = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        // Get all applications that are in interview stage
        const applications = yield applicationRepository.find({
            where: {
                user: { id: userId },
                status: Application_1.ApplicationStatus.INTERVIEW
            },
            relations: ['job', 'job.employer', 'interview']
        });
        // Transform the data to match the frontend interface
        const interviews = applications.map(app => {
            var _a, _b, _c, _d, _e;
            return ({
                id: ((_a = app.interview) === null || _a === void 0 ? void 0 : _a.id) || '',
                applicationId: app.id,
                jobTitle: app.job.title,
                companyName: app.job.employer.company,
                scheduledTime: ((_b = app.interview) === null || _b === void 0 ? void 0 : _b.scheduledTime) || new Date(),
                status: ((_c = app.interview) === null || _c === void 0 ? void 0 : _c.status) || Interview_1.InterviewStatus.PENDING,
                location: (_d = app.interview) === null || _d === void 0 ? void 0 : _d.location,
                notes: (_e = app.interview) === null || _e === void 0 ? void 0 : _e.notes
            });
        });
        res.json(interviews);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching interviews', error });
    }
}));
exports.respondToInterview = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { interviewId } = req.params;
        const { response } = req.body;
        if (![Interview_1.InterviewStatus.ACCEPTED, Interview_1.InterviewStatus.REJECTED].includes(response)) {
            return res.status(400).json({ message: 'Invalid response status' });
        }
        // Update the interview status
        const interview = yield interviewRepository.findOne({
            where: { id: interviewId },
            relations: ['application']
        });
        if (!interview) {
            return res.status(404).json({ message: 'Interview not found' });
        }
        interview.status = response;
        yield interviewRepository.save(interview);
        // If rejected, update the application status to rejected
        if (response === Interview_1.InterviewStatus.REJECTED) {
            const application = interview.application;
            application.status = Application_1.ApplicationStatus.REJECTED;
            yield applicationRepository.save(application);
        }
        res.json(interview);
    }
    catch (error) {
        res.status(500).json({ message: 'Error responding to interview', error });
    }
}));
exports.scheduleInterview = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { applicationId } = req.params;
        const { scheduledTime, location, notes } = req.body;
        // Check if the application exists and is in a valid state
        const application = yield applicationRepository.findOne({
            where: { id: applicationId },
            relations: ['interview']
        });
        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }
        let interview = application.interview;
        if (!interview) {
            interview = new Interview_1.Interview();
            interview.application = application;
        }
        interview.scheduledTime = new Date(scheduledTime);
        interview.location = location;
        interview.notes = notes;
        interview.status = Interview_1.InterviewStatus.PENDING;
        yield interviewRepository.save(interview);
        // Update application status to interview
        application.status = Application_1.ApplicationStatus.INTERVIEW;
        yield applicationRepository.save(application);
        res.json(interview);
    }
    catch (error) {
        res.status(500).json({ message: 'Error scheduling interview', error });
    }
}));
exports.cancelInterview = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { interviewId } = req.params;
        const { reason } = req.body;
        const interview = yield interviewRepository.findOne({
            where: { id: interviewId },
            relations: ['application']
        });
        if (!interview) {
            return res.status(404).json({ message: 'Interview not found' });
        }
        // Update the interview status
        interview.status = Interview_1.InterviewStatus.CANCELLED;
        interview.notes = reason ? `Cancelled: ${reason}` : 'Interview cancelled';
        yield interviewRepository.save(interview);
        // Update the application status back to reviewed
        const application = interview.application;
        application.status = Application_1.ApplicationStatus.REVIEWED;
        yield applicationRepository.save(application);
        res.json(interview);
    }
    catch (error) {
        res.status(500).json({ message: 'Error cancelling interview', error });
    }
}));
