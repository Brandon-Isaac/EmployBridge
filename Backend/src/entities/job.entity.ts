import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { JobApplication } from './job-application.entity';
import { Employer } from './employer.entity';

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

  @ManyToOne(() => Employer, employer => employer.jobPostings)
  employer: Employer;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({
    type: 'enum',
    enum: JobType
  })
  type: JobType;

  @Column({
    type: 'enum',
    enum: ExperienceLevel
  })
  experienceLevel: ExperienceLevel;

  @Column()
  location: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  salaryMin: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  salaryMax: number;

  @Column({ type: 'text', array: true, default: [] })
  requiredSkills: string[];

  @Column({ type: 'text', array: true, default: [] })
  preferredSkills: string[];

  @Column({ type: 'jsonb', nullable: true })
  benefits: {
    name: string;
    description: string;
  }[];

  @Column({ type: 'jsonb', nullable: true })
  questions: {
    id: string;
    question: string;
    required: boolean;
  }[];

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => JobApplication, application => application.job)
  applications: JobApplication[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  expiresAt: Date;
} 