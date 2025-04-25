import { MigrationInterface, QueryRunner } from "typeorm";

export class FixJobSeekerSkills1710000000000 implements MigrationInterface {
    name = 'FixJobSeekerSkills1710000000000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Backup existing data
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "job_seeker_skills_backup" AS 
            SELECT * FROM "job_seeker_skills"
        `);

        // Drop the existing table
        await queryRunner.query(`DROP TABLE IF EXISTS "job_seeker_skills" CASCADE`);

        // Create the new table with correct structure
        await queryRunner.query(`
            CREATE TABLE "job_seeker_skills" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" character varying NOT NULL,
                "level" character varying,
                "yearsOfExperience" integer,
                "jobSeekerId" uuid NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_job_seeker_skills" PRIMARY KEY ("id")
            )
        `);

        // Add foreign key constraint
        await queryRunner.query(`
            ALTER TABLE "job_seeker_skills" 
            ADD CONSTRAINT "FK_job_seeker_skills_jobSeeker" 
            FOREIGN KEY ("jobSeekerId") REFERENCES "job_seekers"("id") 
            ON DELETE CASCADE
        `);

        // Create index for better query performance
        await queryRunner.query(`
            CREATE INDEX "IDX_job_seeker_skills_jobSeekerId" 
            ON "job_seeker_skills" ("jobSeekerId")
        `);

        // Restore data from backup, ensuring no duplicates
        await queryRunner.query(`
            INSERT INTO "job_seeker_skills" ("name", "level", "yearsOfExperience", "jobSeekerId", "createdAt", "updatedAt")
            SELECT DISTINCT ON ("name", "jobSeekerId") 
                "name", 
                "level", 
                "yearsOfExperience", 
                "jobSeekerId", 
                "createdAt", 
                "updatedAt"
            FROM "job_seeker_skills_backup"
        `);

        // Drop the backup table
        await queryRunner.query(`DROP TABLE IF EXISTS "job_seeker_skills_backup"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS "job_seeker_skills" CASCADE`);
    }
} 