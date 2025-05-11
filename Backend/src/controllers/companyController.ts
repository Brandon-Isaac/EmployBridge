import { Request, Response } from 'express';
import { Company } from '../entities/Company';
import { User } from '../entities/User';
import { AppDataSource } from '../data-source';
import asyncHandler from '../middleware/asyncHandler';

const companyRepository = AppDataSource.getRepository(Company);
const userRepository = AppDataSource.getRepository(User);

export const createCompany = asyncHandler(async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user.userId;
        const { name, description, industry, location, website, logo } = req.body;

        // Check if user already has a company
        const existingCompany = await companyRepository.findOne({
            where: { employees: { id: userId } },
            relations: ['employees'],
        });

        if (existingCompany) {
            return res.status(400).json({ message: 'User already has a company' });
        }

        const company = new Company();
        company.name = name;
        company.description = description;
        company.industry = industry;
        company.location = location;
        company.website = website;
        company.logo = logo;
        company.employeeCount = 1; // Start with 1 employee (the creator)

        // Get the user and set them as the first employee
        const user = await userRepository.findOne({ where: { id: userId } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        company.employees = [user];

        await companyRepository.save(company);
        res.status(201).json(company);
    } catch (error) {
        res.status(500).json({ message: 'Error creating company', error });
    }
});

export const updateCompany = asyncHandler(async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userId = (req as any).user.userId;
        const { name, description, industry, location, website, logo } = req.body;

        const company = await companyRepository.findOne({
            where: { id },
            relations: ['employees'],
        });

        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }

        // Check if user is part of the company
        const isEmployee = company.employees?.some(employee => employee.id === userId) ?? false;
        if (!isEmployee) {
            return res.status(403).json({ message: 'Not authorized to update this company' });
        }

        // Update company fields
        if (name) company.name = name;
        if (description) company.description = description;
        if (industry) company.industry = industry;
        if (location) company.location = location;
        if (website) company.website = website;
        if (logo) company.logo = logo;

        await companyRepository.save(company);
        res.json(company);
    } catch (error) {
        res.status(500).json({ message: 'Error updating company', error });
    }
});

export const deleteCompany = asyncHandler(async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userId = (req as any).user.userId;

        const company = await companyRepository.findOne({
            where: { id },
            relations: ['employees'],
        });

        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }

        // Check if user is part of the company
        const isEmployee = company.employees?.some(employee => employee.id === userId) ?? false;
        if (!isEmployee) {
            return res.status(403).json({ message: 'Not authorized to delete this company' });
        }

        await companyRepository.remove(company);
        res.json({ message: 'Company deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting company', error });
    }
});

export const getCompanyById = asyncHandler(async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const company = await companyRepository.findOne({
            where: { id },
            relations: ['employees'],
        });

        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }

        res.json(company);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching company', error });
    }
});

export const getCompanyEmployees = asyncHandler(async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const company = await companyRepository.findOne({
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
    } catch (error) {
        res.status(500).json({ message: 'Error fetching company employees', error });
    }
}); 

export const getCompanyJobs = asyncHandler(async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const company = await companyRepository.findOne({
            where: { id },
            relations: ['jobs'],
        });

        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }

        res.json({
            jobCount: company.jobs?.length ?? 0,
            jobs: company.jobs
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching company jobs', error });
    }
}); 

export const getCompanyProfile = asyncHandler(async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const company = await companyRepository.findOne({
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
        
    } catch (error) {
        res.status(500).json({ message: 'Error fetching company profile', error });
    }
}); 

export const getCompanyByUserId = asyncHandler(async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user.userId;
        const company = await companyRepository.findOne({
            where: { employees: { id: userId } },
            relations: ['employees'],
        });

        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }

        res.json(company);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching company by user ID', error });
    }
});







