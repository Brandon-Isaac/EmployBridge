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
exports.deletePortfolio = exports.createOrUpdatePortfolio = exports.getPortfolio = void 0;
const Portfolio_1 = require("../entities/Portfolio");
const User_1 = require("../entities/User");
const data_source_1 = require("../data-source");
const asyncHandler_1 = __importDefault(require("../middleware/asyncHandler"));
const portfolioRepository = data_source_1.AppDataSource.getRepository(Portfolio_1.Portfolio);
const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
exports.getPortfolio = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
}));
exports.createOrUpdatePortfolio = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
            portfolio = new Portfolio_1.Portfolio();
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
}));
exports.deletePortfolio = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        yield portfolioRepository.delete({ user: { id: userId } });
        res.json({ message: 'Portfolio deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting portfolio', error });
    }
}));
