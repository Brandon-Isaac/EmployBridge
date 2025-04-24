import { Router } from 'express';
import jobSeekerRoutes from './job-seeker.routes';
import employerRoutes from './employer.routes';
import adminRoutes from './admin.routes';

const router = Router();

router.use('/job-seekers', jobSeekerRoutes);
router.use('/employers', employerRoutes);
router.use('/admin', adminRoutes);

export default router; 