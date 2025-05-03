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
exports.removeUserSkill = exports.addUserSkill = exports.getUserSkills = exports.deleteSkill = exports.updateSkill = exports.createSkill = exports.getSkillById = exports.getAllSkills = void 0;
const entities_1 = require("../entities");
const data_source_1 = require("../data-source");
const skillRepository = data_source_1.AppDataSource.getRepository(entities_1.Skill);
const userRepository = data_source_1.AppDataSource.getRepository(entities_1.User);
const getAllSkills = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skills = yield skillRepository.find();
        res.json(skills);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching skills', error });
    }
});
exports.getAllSkills = getAllSkills;
const getSkillById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const skill = yield skillRepository.findOne({
            where: { id },
            relations: ['users', 'jobs'],
        });
        if (!skill) {
            return res.status(404).json({ message: 'Skill not found' });
        }
        res.json(skill);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching skill', error });
    }
});
exports.getSkillById = getSkillById;
const createSkill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, category, description } = req.body;
        const skill = new entities_1.Skill();
        skill.name = name;
        skill.category = category;
        if (description)
            skill.description = description;
        yield skillRepository.save(skill);
        res.status(201).json(skill);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating skill', error });
    }
});
exports.createSkill = createSkill;
const updateSkill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, category, description } = req.body;
        const skill = yield skillRepository.findOne({ where: { id } });
        if (!skill) {
            return res.status(404).json({ message: 'Skill not found' });
        }
        if (name)
            skill.name = name;
        if (category)
            skill.category = category;
        if (description)
            skill.description = description;
        yield skillRepository.save(skill);
        res.json(skill);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating skill', error });
    }
});
exports.updateSkill = updateSkill;
const deleteSkill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield skillRepository.delete(id);
        res.json({ message: 'Skill deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting skill', error });
    }
});
exports.deleteSkill = deleteSkill;
const getUserSkills = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const user = yield userRepository.findOne({
            where: { id: userId },
            relations: ['skills'],
        });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user.skills);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching user skills', error });
    }
});
exports.getUserSkills = getUserSkills;
const addUserSkill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const { skillId } = req.body;
        const user = yield userRepository.findOne({
            where: { id: userId },
            relations: ['skills'],
        });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const skill = yield skillRepository.findOne({ where: { id: skillId } });
        if (!skill) {
            return res.status(404).json({ message: 'Skill not found' });
        }
        if (!user.skills)
            user.skills = [];
        if (!user.skills.some(s => s.id === skillId)) {
            user.skills.push(skill);
            yield userRepository.save(user);
        }
        res.json(user.skills);
    }
    catch (error) {
        res.status(500).json({ message: 'Error adding user skill', error });
    }
});
exports.addUserSkill = addUserSkill;
const removeUserSkill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { userId, skillId } = req.params;
        const user = yield userRepository.findOne({
            where: { id: userId },
            relations: ['skills'],
        });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.skills = ((_a = user.skills) === null || _a === void 0 ? void 0 : _a.filter(skill => skill.id !== skillId)) || [];
        yield userRepository.save(user);
        res.json(user.skills);
    }
    catch (error) {
        res.status(500).json({ message: 'Error removing user skill', error });
    }
});
exports.removeUserSkill = removeUserSkill;
