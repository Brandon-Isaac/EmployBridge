import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Job } from './job.entity';
import { JobSeeker } from './job-seeker.entity';
import { CV } from './cv.entity';
import { PortfolioItem } from './portfolio.entity';

export enum SkillCategory {
  TECHNICAL = 'technical',
  SOFT = 'soft',
  LANGUAGE = 'language',
  CERTIFICATION = 'certification',
  OTHER = 'other'
}

@Entity('skills')
export class Skill {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({
    type: 'enum',
    enum: SkillCategory,
    default: SkillCategory.TECHNICAL
  })
  category: SkillCategory;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  level: string;

  @ManyToMany(() => Job, job => job.requiredSkills)
  requiredInJobs: Job[];

  @ManyToMany(() => Job, job => job.preferredSkills)
  preferredInJobs: Job[];

  @ManyToMany(() => JobSeeker, jobSeeker => jobSeeker.skills)
  jobSeekers: JobSeeker[];

  @ManyToMany(() => PortfolioItem, (portfolioItem: PortfolioItem) => portfolioItem.skills)
  portfolioItems: PortfolioItem[];

  @ManyToMany(() => CV, cv => cv.skills)
  cvs: CV[];

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
} 