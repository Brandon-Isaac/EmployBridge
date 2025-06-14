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
exports.deleteExperience = exports.updateExperience = exports.getExperiences = exports.createExperience = void 0;
const Experience_1 = require("../entities/Experience");
const User_1 = require("../entities/User");
const data_source_1 = require("../data-source");
const experienceRepository = data_source_1.AppDataSource.getRepository(Experience_1.Experience);
const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
const createExperience = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const { title, company, startDate, endDate, current, description } = req.body;
        const user = yield userRepository.findOne({ where: { id: userId } });
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        const experience = new Experience_1.Experience();
        experience.title = title;
        experience.company = company;
        experience.startDate = new Date(startDate);
        if (endDate)
            experience.endDate = new Date(endDate);
        experience.current = current;
        experience.description = description;
        experience.user = user;
        yield experienceRepository.save(experience);
        res.status(201).json(experience);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating experience', error });
    }
});
exports.createExperience = createExperience;
const getExperiences = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const experiences = yield experienceRepository.find({
            where: { user: { id: userId } },
            order: { startDate: 'DESC' },
        });
        res.json(experiences);
        return;
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching experiences', error });
    }
});
exports.getExperiences = getExperiences;
const updateExperience = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const { id } = req.params;
        const updateData = req.body;
        const experience = yield experienceRepository.findOne({
            where: { id, user: { id: userId } },
        });
        if (!experience) {
            res.status(404).json({ message: 'Experience not found' });
            return;
        }
        if (updateData.title)
            experience.title = updateData.title;
        if (updateData.company)
            experience.company = updateData.company;
        if (updateData.startDate)
            experience.startDate = new Date(updateData.startDate);
        if (updateData.endDate)
            experience.endDate = new Date(updateData.endDate);
        if (updateData.current !== undefined)
            experience.current = updateData.current;
        if (updateData.description)
            experience.description = updateData.description;
        yield experienceRepository.save(experience);
        res.json(experience);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating experience', error });
    }
});
exports.updateExperience = updateExperience;
const deleteExperience = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const { id } = req.params;
        const result = yield experienceRepository.delete({
            id,
            user: { id: userId },
        });
        if (result.affected === 0) {
            res.status(404).json({ message: 'Experience not found' });
            return;
        }
        res.json({ message: 'Experience deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting experience', error });
    }
});
exports.deleteExperience = deleteExperience;
