import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { JobApplication } from './job-application.entity';
import { Employer } from './employer.entity';
import { Skill } from './skill.entity';
import { Company } from './company.entity';

export enum JobType {
  FULL_TIME = 'full-time',
  PART_TIME = 'part-time',
  CONTRACT = 'contract',
  TEMPORARY = 'temporary',
  INTERNSHIP = 'internship'
}

export enum ExperienceLevel {
  ENTRY = 'entry',
  JUNIOR = 'junior',
  MID = 'mid',
  SENIOR = 'senior',
  EXPERT = 'expert'
}

@Entity('jobs')
export class Job {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Company, company => company.jobs)
  company: Company;

  @Column({ type: 'varchar', length: 200 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar', length: 100 })
  location: string;

  @Column({ type: 'varchar', length: 50 })
  type: 'full-time' | 'part-time' | 'contract' | 'internship';

  @Column({ type: 'varchar', length: 50 })
  experience: 'entry' | 'mid' | 'senior' | 'lead';

  @Column({ type: 'jsonb', nullable: true })
  salary: {
    min: number;
    max: number;
    currency: string;
  };

  @Column({ type: 'jsonb', nullable: true })
  requirements: string[];

  @Column({ type: 'jsonb', nullable: true })
  benefits: string[];

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @OneToMany(() => JobApplication, application => application.job)
  applications: JobApplication[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  expiresAt: Date;

  @ManyToMany(() => Skill, skill => skill.requiredInJobs)
  @JoinTable({
    name: 'job_required_skills',
    joinColumn: { name: 'jobId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'skillId', referencedColumnName: 'id' }
  })
  requiredSkills: Skill[];

  @ManyToMany(() => Skill, skill => skill.preferredInJobs)
  @JoinTable({
    name: 'job_preferred_skills',
    joinColumn: { name: 'jobId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'skillId', referencedColumnName: 'id' }
  })
  preferredSkills: Skill[];

  @Column({ type: 'jsonb', nullable: true })
  questions: {
    id: string;
    question: string;
    required: boolean;
  }[];
} 