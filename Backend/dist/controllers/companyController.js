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
exports.getCompanyByUserId = exports.getCompanyProfile = exports.getCompanyJobs = exports.getCompanyEmployees = exports.getCompanyById = exports.deleteCompany = exports.updateCompany = exports.createCompany = void 0;
const Company_1 = require("../entities/Company");
const User_1 = require("../entities/User");
const data_source_1 = require("../data-source");
const asyncHandler_1 = __importDefault(require("../middleware/asyncHandler"));
const companyRepository = data_source_1.AppDataSource.getRepository(Company_1.Company);
const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
exports.createCompany = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const { name, description, industry, location, website, logo } = req.body;
        // Check if user already has a company
        const existingCompany = yield companyRepository.findOne({
            where: { employees: { id: userId } },
            relations: ['employees'],
        });
        if (existingCompany) {
            return res.status(400).json({ message: 'User already has a company' });
        }
        const company = new Company_1.Company();
        company.name = name;
        company.description = description;
        company.industry = industry;
        company.location = location;
        company.website = website;
        company.logo = logo;
        company.employeeCount = 1; // Start with 1 employee (the creator)
        // Get the user and set them as the first employee
        const user = yield userRepository.findOne({ where: { id: userId } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        company.employees = [user];
        yield companyRepository.save(company);
        res.status(201).json(company);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating company', error });
    }
}));
exports.updateCompany = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const { id } = req.params;
        const userId = req.user.userId;
        const { name, description, industry, location, website, logo } = req.body;
        const company = yield companyRepository.findOne({
            where: { id },
            relations: ['employees'],
        });
        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }
        // Check if user is part of the company
        const isEmployee = (_b = (_a = company.employees) === null || _a === void 0 ? void 0 : _a.some(employee => employee.id === userId)) !== null && _b !== void 0 ? _b : false;
        if (!isEmployee) {
            return res.status(403).json({ message: 'Not authorized to update this company' });
        }
        // Update company fields
        if (name)
            company.name = name;
        if (description)
            company.description = description;
        if (industry)
            company.industry = industry;
        if (location)
            company.location = location;
        if (website)
            company.website = website;
        if (logo)
            company.logo = logo;
        yield companyRepository.save(company);
        res.json(company);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating company', error });
    }
}));
exports.deleteCompany = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const { id } = req.params;
        const userId = req.user.userId;
        const company = yield companyRepository.findOne({
            where: { id },
            relations: ['employees'],
        });
        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }
        // Check if user is part of the company
        const isEmployee = (_b = (_a = company.employees) === null || _a === void 0 ? void 0 : _a.some(employee => employee.id === userId)) !== null && _b !== void 0 ? _b : false;
        if (!isEmployee) {
            return res.status(403).json({ message: 'Not authorized to delete this company' });
        }
        yield companyRepository.remove(company);
        res.json({ message: 'Company deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting company', error });
    }
}));
exports.getCompanyById = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const company = yield companyRepository.findOne({
            where: { id },
            relations: ['employees'],
        });
        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.json(company);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching company', error });
    }
}));
exports.getCompanyEmployees = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const company = yield companyRepository.findOne({
            where: { id },
            relations: ['employees'],
        });
        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.json({
            employeeCount: company.employeeCount,
            employees: company.employees
        });
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching company employees', error });
    }
}));
exports.getCompanyJobs = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const { id } = req.params;
        const company = yield companyRepository.findOne({
            where: { id },
            relations: ['jobs'],
        });
        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.json({
            jobCount: (_b = (_a = company.jobs) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0,
            jobs: company.jobs
        });
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching company jobs', error });
    }
}));
exports.getCompanyProfile = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const company = yield companyRepository.findOne({
            where: { id },
            relations: ['employees'],
        });
        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }
        const profile = {
            name: company.name,
            description: company.description,
            industry: company.industry,
            location: company.location,
            website: company.website,
            logo: company.logo,
            employeeCount: company.employeeCount,
            employees: company.employees
        };
        res.json({
            company: profile,
            jobs: company.jobs
        });
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching company profile', error });
    }
}));
exports.getCompanyByUserId = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const company = yield companyRepository.findOne({
            where: { employees: { id: userId } },
            relations: ['employees'],
        });
        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.json(company);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching company by user ID', error });
    }
}));
