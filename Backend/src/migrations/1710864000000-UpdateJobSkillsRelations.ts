import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateJobSkillsRelations1710864000000 implements MigrationInterface {
    name = 'UpdateJobSkillsRelations1710864000000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Drop the old columns
        await queryRunner.query(`ALTER TABLE "jobs" DROP COLUMN "requiredSkills"`);
        await queryRunner.query(`ALTER TABLE "jobs" DROP COLUMN "preferredSkills"`);

        // Create the join tables
        await queryRunner.query(`CREATE TABLE "job_required_skills" ("jobId" uuid NOT NULL, "skillId" uuid NOT NULL, CONSTRAINT "PK_job_required_skills" PRIMARY KEY ("jobId", "skillId"))`);
        await queryRunner.query(`CREATE TABLE "job_preferred_skills" ("jobId" uuid NOT NULL, "skillId" uuid NOT NULL, CONSTRAINT "PK_job_preferred_skills" PRIMARY KEY ("jobId", "skillId"))`);

        // Add foreign key constraints
        await queryRunner.query(`ALTER TABLE "job_required_skills" ADD CONSTRAINT "FK_job_required_skills_job" FOREIGN KEY ("jobId") REFERENCES "jobs"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "job_required_skills" ADD CONSTRAINT "FK_job_required_skills_skill" FOREIGN KEY ("skillId") REFERENCES "skills"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "job_preferred_skills" ADD CONSTRAINT "FK_job_preferred_skills_job" FOREIGN KEY ("jobId") REFERENCES "jobs"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "job_preferred_skills" ADD CONSTRAINT "FK_job_preferred_skills_skill" FOREIGN KEY ("skillId") REFERENCES "skills"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop foreign key constraints
        await queryRunner.query(`ALTER TABLE "job_preferred_skills" DROP CONSTRAINT "FK_job_preferred_skills_skill"`);
        await queryRunner.query(`ALTER TABLE "job_preferred_skills" DROP CONSTRAINT "FK_job_preferred_skills_job"`);
        await queryRunner.query(`ALTER TABLE "job_required_skills" DROP CONSTRAINT "FK_job_required_skills_skill"`);
        await queryRunner.query(`ALTER TABLE "job_required_skills" DROP CONSTRAINT "FK_job_required_skills_job"`);

        // Drop the join tables
        await queryRunner.query(`DROP TABLE "job_preferred_skills"`);
        await queryRunner.query(`DROP TABLE "job_required_skills"`);

        // Recreate the old columns
        await queryRunner.query(`ALTER TABLE "jobs" ADD "requiredSkills" text array NOT NULL DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "jobs" ADD "preferredSkills" text array NOT NULL DEFAULT '{}'`);
    }
} 