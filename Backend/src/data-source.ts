import { DataSource } from "typeorm";
import { JobSeekerSkill } from "./entities/job-seeker-skill.entity";
import { JobSeeker } from "./entities/job-seeker.entity";
import { Employer } from "./entities/employer.entity";
import { Job } from "./entities/job.entity";
import { Company } from "./entities/company.entity";
import { Admin } from "./entities/admin.entity";
import { Interview } from "./entities/interview.entity";
import { JobApplication } from "./entities/job-application.entity";
import { Skill } from "./entities/skill.entity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Killerfrost2030.",
    database: "postgres",
    synchronize: false,
    logging: true,
    entities: [
        JobSeekerSkill,
        JobSeeker,
        Employer,
        Job,
        Company,
        Admin,
        Interview,
        JobApplication,
        Skill
    ],
    migrations: ["src/migrations/*.ts"],
    subscribers: [],
}); 