import { Response } from 'express';
import { getRepository } from 'typeorm';
import { JobSeeker } from '../entities/job-seeker.entity';
import { Employer } from '../entities/employer.entity';
import { Job } from '../entities/job.entity';
import { Company } from '../entities/company.entity';
import { Admin } from '../entities/admin.entity';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { validate } from 'class-validator';
import { asyncHandler } from '../middleware/async-handler';
import { AuthRequest } from '../types/auth-request.interface';

export class AdminController {
  private get adminRepository() {
    return getRepository(Admin);
  }

  private get jobSeekerRepository() {
    return getRepository(JobSeeker);
  }

  private get employerRepository() {
    return getRepository(Employer);
  }

  private get jobRepository() {
    return getRepository(Job);
  }

  private get companyRepository() {
    return getRepository(Company);
  }

  private setAuthCookie(res: Response, token: string) {
    res.cookie('auth_token', token, {
      httpOnly: true,
      secure: false, // Set to false since frontend is on HTTP
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      path: '/',
      domain: 'employbridgeai-frontend.s3-website.us-east-2.amazonaws.com'
    });
  }

  register = asyncHandler(async (req: AuthRequest, res: Response) => {
    const { firstName, lastName, email, password } = req.body;

    // Check if admin already exists
    const existingAdmin = await this.adminRepository.findOne({ where: { email } });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new admin
    const admin = this.adminRepository.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: 'ADMIN'
    });

    // Validate entity
    const errors = await validate(admin);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    // Save admin
    await this.adminRepository.save(admin);

    // Generate JWT token
    const token = jwt.sign(
      { id: admin.id, email: admin.email, role: 'ADMIN' },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    // Set auth cookie
    this.setAuthCookie(res, token);

    return res.status(201).json({
      message: 'Admin registered successfully',
      admin: {
        id: admin.id,
        firstName: admin.firstName,
        lastName: admin.lastName,
        email: admin.email,
        role: admin.role
      }
    });
  });

  login = asyncHandler(async (req: AuthRequest, res: Response) => {
    const { email, password } = req.body;

    // Find admin
    const admin = await this.adminRepository.findOne({ where: { email } });
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: admin.id, email: admin.email, role: 'ADMIN' },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    // Set auth cookie
    this.setAuthCookie(res, token);

    return res.json({
      message: 'Login successful',
      admin: {
        id: admin.id,
        firstName: admin.firstName,
        lastName: admin.lastName,
        email: admin.email,
        role: admin.role
      }
    });
  });

  logout = asyncHandler(async (_req: AuthRequest, res: Response) => {
    res.clearCookie('auth_token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    });
    return res.json({ message: 'Logged out successfully' });
  });

  // User Management
  getJobSeekers = asyncHandler(async (_req: AuthRequest, res: Response) => {
    const jobSeekers = await this.jobSeekerRepository.find({
      relations: ['skills', 'applications']
    });
    return res.json({ jobSeekers });
  });

  getEmployers = asyncHandler(async (_req: AuthRequest, res: Response) => {
    const employers = await this.employerRepository.find({
      relations: ['companies', 'jobPostings']
    });
    return res.json({ employers });
  });

  deactivateUser = asyncHandler(async (req: AuthRequest, res: Response) => {
    const { id, type } = req.params;
    
    if (type === 'job-seeker') {
      const jobSeeker = await this.jobSeekerRepository.findOne({ where: { id } });
      if (!jobSeeker) {
        return res.status(404).json({ message: 'Job seeker not found' });
      }
      jobSeeker.isActive = false;
      await this.jobSeekerRepository.save(jobSeeker);
    } else if (type === 'employer') {
      const employer = await this.employerRepository.findOne({ where: { id } });
      if (!employer) {
        return res.status(404).json({ message: 'Employer not found' });
      }
      employer.isActive = false;
      await this.employerRepository.save(employer);
    } else {
      return res.status(400).json({ message: 'Invalid user type' });
    }

    return res.json({ message: 'User deactivated successfully' });
  });

  activateUser = asyncHandler(async (req: AuthRequest, res: Response) => {
    const { id, type } = req.params;
    
    if (type === 'job-seeker') {
      const jobSeeker = await this.jobSeekerRepository.findOne({ where: { id } });
      if (!jobSeeker) {
        return res.status(404).json({ message: 'Job seeker not found' });
      }
      jobSeeker.isActive = true;
      await this.jobSeekerRepository.save(jobSeeker);
    } else if (type === 'employer') {
      const employer = await this.employerRepository.findOne({ where: { id } });
      if (!employer) {
        return res.status(404).json({ message: 'Employer not found' });
      }
      employer.isActive = true;
      await this.employerRepository.save(employer);
    } else {
      return res.status(400).json({ message: 'Invalid user type' });
    }

    return res.json({ message: 'User activated successfully' });
  });

  // Job Management
  getJobs = asyncHandler(async (_req: AuthRequest, res: Response) => {
    const jobs = await this.jobRepository.find({
      relations: ['employer', 'applications']
    });
    return res.json({ jobs });
  });

  deactivateJob = asyncHandler(async (req: AuthRequest, res: Response) => {
    const { id } = req.params;
    const job = await this.jobRepository.findOne({ where: { id } });
    
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    job.isActive = false;
    await this.jobRepository.save(job);

    return res.json({ message: 'Job deactivated successfully' });
  });

  activateJob = asyncHandler(async (req: AuthRequest, res: Response) => {
    const { id } = req.params;
    const job = await this.jobRepository.findOne({ where: { id } });
    
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    job.isActive = true;
    await this.jobRepository.save(job);

    return res.json({ message: 'Job activated successfully' });
  });

  // Company Management
  getCompanies = asyncHandler(async (_req: AuthRequest, res: Response) => {
    const companies = await this.companyRepository.find({
      relations: ['employer']
    });
    return res.json({ companies });
  });

  deactivateCompany = asyncHandler(async (req: AuthRequest, res: Response) => {
    const { id } = req.params;
    const company = await this.companyRepository.findOne({ where: { id } });
    
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    company.isActive = false;
    await this.companyRepository.save(company);

    return res.json({ message: 'Company deactivated successfully' });
  });

  activateCompany = asyncHandler(async (req: AuthRequest, res: Response) => {
    const { id } = req.params;
    const company = await this.companyRepository.findOne({ where: { id } });
    
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    company.isActive = true;
    await this.companyRepository.save(company);

    return res.json({ message: 'Company activated successfully' });
  });

  // System Statistics
  getSystemStats = asyncHandler(async (_req: AuthRequest, res: Response) => {
    const [
      totalJobSeekers,
      totalEmployers,
      totalJobs,
      totalCompanies,
      activeJobs,
      activeCompanies
    ] = await Promise.all([
      this.jobSeekerRepository.count(),
      this.employerRepository.count(),
      this.jobRepository.count(),
      this.companyRepository.count(),
      this.jobRepository.count({ where: { isActive: true } }),
      this.companyRepository.count({ where: { isActive: true } })
    ]);

    return res.json({
      totalJobSeekers,
      totalEmployers,
      totalJobs,
      totalCompanies,
      activeJobs,
      activeCompanies
    });
  });
} 