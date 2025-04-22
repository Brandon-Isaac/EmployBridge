import { Router } from 'express';
import { CompanyController } from '../controllers/company.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
const companyController = new CompanyController();

// All routes require authentication
router.use(authMiddleware);

// Company routes
router.post('/', companyController.createCompany);
router.get('/', companyController.getCompanies);
router.get('/:id', companyController.getCompany);
router.put('/:id', companyController.updateCompany);
router.delete('/:id', companyController.deleteCompany);

export default router; 