import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany } from 'typeorm';
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

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  location: string;

  @Column({ type: 'text', nullable: true })
  bio: string;

  @Column({ nullable: true })
  profilePicture: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  resume: string;

  @Column({ default: false })
  isVerified: boolean;

  @Column({ nullable: true })
  verificationToken: string;

  @Column({ nullable: true })
  verificationTokenExpires: Date;

  @Column({ nullable: true })
  resetPasswordToken: string;

  @Column({ nullable: true })
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

  @OneToMany(() => JobSeekerSkill, (skill: JobSeekerSkill) => skill.jobSeeker)
  jobSeekerSkills: JobSeekerSkill[];

  @OneToMany(() => JobSeekerExperience, (experience: JobSeekerExperience) => experience.jobSeeker)
  jobSeekerExperiences: JobSeekerExperience[];

  @OneToMany(() => JobSeekerEducation, (education: JobSeekerEducation) => education.jobSeeker)
  jobSeekerEducations: JobSeekerEducation[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ default: true })
  isActive: boolean;
} 