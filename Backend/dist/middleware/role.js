"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isJobSeeker = exports.isEmployer = void 0;
const User_1 = require("../entities/User");
const isEmployer = (req, res, next) => {
    const user = req.user;
    if (!user) {
        res.status(401).json({ message: 'Unauthorized - No user found' });
        return;
    }
    if (user.role !== User_1.UserRole.EMPLOYER) {
        res.status(403).json({ message: 'Forbidden - Employer access required' });
        return;
    }
    next();
};
exports.isEmployer = isEmployer;
const isJobSeeker = (req, res, next) => {
    const user = req.user;
    if (!user) {
        res.status(401).json({ message: 'Unauthorized - No user found' });
        return;
    }
    if (user.role !== User_1.UserRole.JOB_SEEKER) {
        res.status(403).json({ message: 'Forbidden - Job Seeker access required' });
        return;
    }
    next();
};
exports.isJobSeeker = isJobSeeker;
