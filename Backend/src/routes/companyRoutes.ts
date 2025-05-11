import express from 'express';
import { 
    createCompany, 
    updateCompany, 
    deleteCompany, 
    getCompanyById, 
    getCompanyEmployees,
    getCompanyJobs,
    getCompanyProfile,
    getCompanyByUserId
} from '../controllers/companyController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

// All routes require authentication
router.use(authenticate);

// Create a new company
router.post('/', createCompany);

// Update company details
router.put('/:id', updateCompany);

// Delete a company
router.delete('/:id', deleteCompany);

// Get company by ID
router.get('/:id', getCompanyById);

// Get company employees
router.get('/:id/employees', getCompanyEmployees);

// Get company jobs
router.get('/:id/jobs', getCompanyJobs);

// Get company profile
router.get('/:id/profile', getCompanyProfile);

// Get company by user ID
router.get('/user/:userId', getCompanyByUserId);

export default router; 