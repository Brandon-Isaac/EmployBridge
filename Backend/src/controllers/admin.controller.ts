import {  Response } from 'express';
import { getRepository } from 'typeorm';
import { JobSeeker } from '../entities/job-seeker.entity';
import { Employer } from '../entities/employer.entity';
import { Job } from '../entities/job.entity';
import { Company } from '../entities/company.entity';
import { asyncHandler } from '../middleware/async-handler';
import { AuthRequest } from '../types/auth-request.interface';

export class AdminController {
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

  // User Management
  getJobSeekers = asyncHandler(async (_req: AuthRequest, res: Response) => {
    const jobSeekers = await this.jobSeekerRepository.find({
      relations: ['skills', 'applications']
    });
    return res.json({ jobSeekers });
  });

  getEmployers = asyncHandler(async (_req: AuthRequest, res: Response) => {
    const employers = await this.employerRepository.find({
      relations: ['companies', 'jobs']
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
      relations: ['employer', 'jobs']
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