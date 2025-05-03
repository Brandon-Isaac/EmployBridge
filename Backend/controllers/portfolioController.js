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
exports.deletePortfolio = exports.createOrUpdatePortfolio = exports.getPortfolio = void 0;
const entities_1 = require("../entities");
const data_source_1 = require("../data-source");
const portfolioRepository = data_source_1.AppDataSource.getRepository(entities_1.Portfolio);
const userRepository = data_source_1.AppDataSource.getRepository(entities_1.User);
const getPortfolio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const portfolio = yield portfolioRepository.findOne({
            where: { user: { id: userId } },
        });
        if (!portfolio) {
            return res.status(404).json({ message: 'Portfolio not found' });
        }
        res.json(portfolio);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching portfolio', error });
    }
});
exports.getPortfolio = getPortfolio;
const createOrUpdatePortfolio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const { projects, experience, education } = req.body;
        const user = yield userRepository.findOne({ where: { id: userId } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        let portfolio = yield portfolioRepository.findOne({
            where: { user: { id: userId } },
        });
        if (!portfolio) {
            portfolio = new entities_1.Portfolio();
            portfolio.user = user;
        }
        if (projects)
            portfolio.projects = projects;
        if (experience)
            portfolio.experience = experience;
        if (education)
            portfolio.education = education;
        yield portfolioRepository.save(portfolio);
        res.json(portfolio);
    }
    catch (error) {
        res.status(500).json({ message: 'Error saving portfolio', error });
    }
});
exports.createOrUpdatePortfolio = createOrUpdatePortfolio;
const deletePortfolio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        yield portfolioRepository.delete({ user: { id: userId } });
        res.json({ message: 'Portfolio deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting portfolio', error });
    }
});
exports.deletePortfolio = deletePortfolio;
