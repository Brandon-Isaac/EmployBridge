"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const companyController_1 = require("../controllers/companyController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
// All routes require authentication
router.use(authMiddleware_1.authenticate);
// Create a new company
router.post('/', companyController_1.createCompany);
// Update company details
router.put('/:id', companyController_1.updateCompany);
// Delete a company
router.delete('/:id', companyController_1.deleteCompany);
// Get company by ID
router.get('/:id', companyController_1.getCompanyById);
// Get company employees
router.get('/:id/employees', companyController_1.getCompanyEmployees);
// Get company jobs
router.get('/:id/jobs', companyController_1.getCompanyJobs);
// Get company profile
router.get('/:id/profile', companyController_1.getCompanyProfile);
// Get company by user ID
router.get('/user/:userId', companyController_1.getCompanyByUserId);
exports.default = router;
