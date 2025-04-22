import { Response } from 'express';
import { getRepository } from 'typeorm';
import { Company } from '../entities/company.entity';
import { validate } from 'class-validator';
import { asyncHandler } from '../middleware/async-handler';
import { AuthRequest } from '../types/auth-request.interface';

export class CompanyController {
  private get companyRepository() {
    return getRepository(Company);
  }

  createCompany = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { name, description, website, logo, industry, size, location } = req.body;

    const company = this.companyRepository.create({
      name,
      description,
      website,
      logo,
      industry,
      size,
      location,
      employer: req.user
    });

    const errors = await validate(company);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    await this.companyRepository.save(company);

    return res.status(201).json({
      message: 'Company created successfully',
      company
    });
  });

  getCompanies = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const companies = await this.companyRepository.find({
      where: { employer: { id: req.user.id } }
    });

    return res.json({ companies });
  });

  getCompany = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { id } = req.params;
    const company = await this.companyRepository.findOne({
      where: { id, employer: { id: req.user.id } }
    });

    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    return res.json({ company });
  });

  updateCompany = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { id } = req.params;
    const { name, description, website, logo, industry, size, location } = req.body;

    const company = await this.companyRepository.findOne({
      where: { id, employer: { id: req.user.id } }
    });

    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    company.name = name || company.name;
    company.description = description || company.description;
    company.website = website || company.website;
    company.logo = logo || company.logo;
    company.industry = industry || company.industry;
    company.size = size || company.size;
    company.location = location || company.location;

    const errors = await validate(company);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    await this.companyRepository.save(company);

    return res.json({
      message: 'Company updated successfully',
      company
    });
  });

  deleteCompany = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { id } = req.params;
    const company = await this.companyRepository.findOne({
      where: { id, employer: { id: req.user.id } }
    });

    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    await this.companyRepository.remove(company);

    return res.json({ message: 'Company deleted successfully' });
  });
} 