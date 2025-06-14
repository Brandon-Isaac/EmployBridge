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
exports.deleteEducation = exports.updateEducation = exports.getEducations = exports.createEducation = void 0;
const Education_1 = require("../entities/Education");
const User_1 = require("../entities/User");
const data_source_1 = require("../data-source");
const educationRepository = data_source_1.AppDataSource.getRepository(Education_1.Education);
const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
const createEducation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const { institution, degree, fieldOfStudy, startDate, endDate, current, description } = req.body;
        const user = yield userRepository.findOne({ where: { id: userId } });
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        const education = new Education_1.Education();
        education.institution = institution;
        education.degree = degree;
        education.fieldOfStudy = fieldOfStudy;
        education.startDate = new Date(startDate);
        if (endDate)
            education.endDate = new Date(endDate);
        education.current = current;
        if (description)
            education.description = description;
        education.user = user;
        yield educationRepository.save(education);
        res.status(201).json(education);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating education', error });
    }
});
exports.createEducation = createEducation;
const getEducations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const educations = yield educationRepository.find({
            where: { user: { id: userId } },
            order: { startDate: 'DESC' },
        });
        res.json(educations);
        return;
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching educations', error });
    }
});
exports.getEducations = getEducations;
const updateEducation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const { id } = req.params;
        const updateData = req.body;
        const education = yield educationRepository.findOne({
            where: { id, user: { id: userId } },
        });
        if (!education) {
            res.status(404).json({ message: 'Education not found' });
            return;
        }
        if (updateData.institution)
            education.institution = updateData.institution;
        if (updateData.degree)
            education.degree = updateData.degree;
        if (updateData.fieldOfStudy)
            education.fieldOfStudy = updateData.fieldOfStudy;
        if (updateData.startDate)
            education.startDate = new Date(updateData.startDate);
        if (updateData.endDate)
            education.endDate = new Date(updateData.endDate);
        if (updateData.current !== undefined)
            education.current = updateData.current;
        if (updateData.description)
            education.description = updateData.description;
        yield educationRepository.save(education);
        res.json(education);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating education', error });
    }
});
exports.updateEducation = updateEducation;
const deleteEducation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const { id } = req.params;
        const result = yield educationRepository.delete({
            id,
            user: { id: userId },
        });
        if (result.affected === 0) {
            res.status(404).json({ message: 'Education not found' });
            return;
        }
        res.json({ message: 'Education deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting education', error });
    }
});
exports.deleteEducation = deleteEducation;
