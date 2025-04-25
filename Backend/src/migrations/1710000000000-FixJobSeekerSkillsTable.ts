import { MigrationInterface, QueryRunner } from "typeorm";

export class FixJobSeekerSkillsTable1710000000000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // First, create a temporary table to store the existing data
        await queryRunner.query(`
            CREATE TABLE job_seeker_skills_temp (
                "jobSeekerId" uuid NOT NULL,
                "skillId" uuid NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_job_seeker_skills_temp" PRIMARY KEY ("jobSeekerId", "skillId"),
                CONSTRAINT "FK_job_seeker_skills_temp_job_seeker" FOREIGN KEY ("jobSeekerId") REFERENCES job_seeker(id) ON DELETE CASCADE,
                CONSTRAINT "FK_job_seeker_skills_temp_skill" FOREIGN KEY ("skillId") REFERENCES skill(id) ON DELETE CASCADE
            )
        `);

        // Copy data from the old table to the temporary table
        await queryRunner.query(`
            INSERT INTO job_seeker_skills_temp ("jobSeekerId", "skillId", "createdAt", "updatedAt")
            SELECT DISTINCT "jobSeekerId", "skillId", "createdAt", "updatedAt"
            FROM job_seeker_skills
        `);

        // Drop the old table
        await queryRunner.query(`DROP TABLE job_seeker_skills`);

        // Rename the temporary table to the original name
        await queryRunner.query(`ALTER TABLE job_seeker_skills_temp RENAME TO job_seeker_skills`);

        // Recreate the indexes
        await queryRunner.query(`
            CREATE INDEX "IDX_job_seeker_skills_job_seeker" ON job_seeker_skills("jobSeekerId");
            CREATE INDEX "IDX_job_seeker_skills_skill" ON job_seeker_skills("skillId");
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Create a temporary table with the old structure
        await queryRunner.query(`
            CREATE TABLE job_seeker_skills_temp (
                "jobSeekerId" uuid NOT NULL,
                "skillId" uuid NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_job_seeker_skills_temp" PRIMARY KEY ("jobSeekerId"),
                CONSTRAINT "FK_job_seeker_skills_temp_job_seeker" FOREIGN KEY ("jobSeekerId") REFERENCES job_seeker(id) ON DELETE CASCADE,
                CONSTRAINT "FK_job_seeker_skills_temp_skill" FOREIGN KEY ("skillId") REFERENCES skill(id) ON DELETE CASCADE
            )
        `);

        // Copy data back to the old structure (this will keep only one skill per job seeker)
        await queryRunner.query(`
            INSERT INTO job_seeker_skills_temp ("jobSeekerId", "skillId", "createdAt", "updatedAt")
            SELECT DISTINCT ON ("jobSeekerId") "jobSeekerId", "skillId", "createdAt", "updatedAt"
            FROM job_seeker_skills
            ORDER BY "jobSeekerId", "createdAt"
        `);

        // Drop the current table
        await queryRunner.query(`DROP TABLE job_seeker_skills`);

        // Rename the temporary table back
        await queryRunner.query(`ALTER TABLE job_seeker_skills_temp RENAME TO job_seeker_skills`);

        // Recreate the indexes
        await queryRunner.query(`
            CREATE INDEX "IDX_job_seeker_skills_job_seeker" ON job_seeker_skills("jobSeekerId");
            CREATE INDEX "IDX_job_seeker_skills_skill" ON job_seeker_skills("skillId");
        `);
    }
} 