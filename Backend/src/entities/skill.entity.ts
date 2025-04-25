import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, CreateDateColumn, UpdateDateColumn, JoinTable, OneToMany } from 'typeorm';
import { JobSeeker } from './job-seeker.entity';
import { Job } from './job.entity';
import { PortfolioItem } from './portfolio.entity';
import { CV } from './cv.entity';
import { JobSeekerSkill } from "./job-seeker-skill.entity";

export enum SkillCategory {
  TECHNICAL = 'technical',
  SOFT = 'soft',
  LANGUAGE = 'language',
  CERTIFICATION = 'certification',
  OTHER = 'other'
}

export enum SkillLevel {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
  EXPERT = 'expert'
}

@Entity('skills')
export class Skill {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: SkillCategory,
    default: SkillCategory.TECHNICAL
  })
  category: SkillCategory;

  @Column({
    type: 'enum',
    enum: SkillLevel,
    default: SkillLevel.INTERMEDIATE
  })
  level: SkillLevel;

  @Column({ default: true })
  isActive: boolean;

  @ManyToMany(() => JobSeeker, jobSeeker => jobSeeker.skills)
  @JoinTable()
  jobSeekers: JobSeeker[];

  @ManyToMany(() => PortfolioItem, (portfolioItem: PortfolioItem) => portfolioItem.skills)
  portfolioItems: PortfolioItem[];

  @ManyToMany(() => Job, job => job.requiredSkills)
  requiredInJobs: Job[];

  @ManyToMany(() => Job, job => job.preferredSkills)
  preferredInJobs: Job[];

  @ManyToMany(() => CV, (cv: CV) => cv.skills)
  cvs: CV[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => JobSeekerSkill, jobSeekerSkill => jobSeekerSkill.skill)
  jobSeekerSkills: JobSeekerSkill[];
} 