import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { JobSeeker } from './job-seeker.entity';
import { Job } from './job.entity';

@Entity('skills')
export class Skill {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  category: string;

  @ManyToMany(() => JobSeeker, jobSeeker => jobSeeker.skills)
  jobSeekers: JobSeeker[];

  @ManyToMany(() => Job, job => job.requiredSkills)
  requiredInJobs: Job[];

  @ManyToMany(() => Job, job => job.preferredSkills)
  preferredInJobs: Job[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
} 