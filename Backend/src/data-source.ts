import { DataSource } from "typeorm";
import { Skill } from "./entities/skill.entity";
import { Job } from "./entities/job.entity";
import { JobSeeker } from "./entities/job-seeker.entity";
import { JobApplication } from "./entities/job-application.entity";
import { Employer } from "./entities/employer.entity";
import { Company } from "./entities/company.entity";
import { PortfolioItem } from "./entities/portfolio.entity";
import { CV } from "./entities/cv.entity";
import { Interview } from "./entities/interview.entity";
import { Admin } from "./entities/admin.entity";
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "5432"),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: true,
    entities: [
        Skill,
        Job,
        JobSeeker,
        JobApplication,
        Employer,
        Company,
        PortfolioItem,
        CV,
        Interview,
        Admin
    ],
    migrations: ["src/migrations/*.ts"],
    subscribers: [],
}); 