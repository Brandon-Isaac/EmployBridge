import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { JobApplication } from './job-application.entity';
import { Skill } from './skill.entity';
import { PortfolioItem } from './portfolio.entity';
import { CV } from './cv.entity';
import { Experience } from './experience.entity';
import { Education } from './education.entity';
import { JobSeekerSkill } from './job-seeker-skill.entity';
import { JobSeekerExperience } from './job-seeker-experience.entity';
import { JobSeekerEducation } from './job-seeker-education.entity';

@Entity('job_seekers')
export class JobSeeker {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  firstName: string;

  @Column({ type: 'varchar', length: 100 })
  lastName: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 100 })
  password: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  phone: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  location: string;

  @Column({ type: 'text', nullable: true })
  bio: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  profilePicture: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  resume: string;

  @Column({ type: 'boolean', default: false })
  isVerified: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true })
  verificationToken: string;

  @Column({ type: 'timestamp', nullable: true })
  verificationTokenExpires: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  resetPasswordToken: string;

  @Column({ type: 'timestamp', nullable: true })
  resetPasswordExpires: Date;

  @OneToMany(() => JobApplication, application => application.jobSeeker)
  applications: JobApplication[];

  @ManyToMany(() => Skill, skill => skill.jobSeekers)
  skills: Skill[];

  @OneToMany(() => PortfolioItem, portfolio => portfolio.jobSeeker)
  portfolios: PortfolioItem[];

  @OneToMany(() => CV, cv => cv.jobSeeker)
  cvs: CV[];

  @OneToMany(() => Experience, experience => experience.jobSeeker)
  experiences: Experience[];

  @OneToMany(() => Education, education => education.jobSeeker)
  education: Education[];

  @OneToMany(() => JobSeekerSkill, skill => skill.jobSeeker)
  jobSeekerSkills: JobSeekerSkill[];

  @OneToMany(() => JobSeekerExperience, experience => experience.jobSeeker)
  jobSeekerExperiences: JobSeekerExperience[];

  @OneToMany(() => JobSeekerEducation, education => education.jobSeeker)
  jobSeekerEducations: JobSeekerEducation[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ default: true })
  isActive: boolean;
} 