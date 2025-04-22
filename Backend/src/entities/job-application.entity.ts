import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { JobSeeker } from './job-seeker.entity';
import { Job } from './job.entity';
import { Interview } from './interview.entity';

export type ApplicationStatus = 'pending' | 'reviewed' | 'shortlisted' | 'rejected' | 'hired';

@Entity('job_applications')
export class JobApplication {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => JobSeeker, jobSeeker => jobSeeker.applications)
  jobSeeker: JobSeeker;

  @ManyToOne(() => Job, job => job.applications)
  job: Job;

  @Column({ type: 'text', nullable: true })
  coverLetter: string;

  @Column({ type: 'jsonb', nullable: true })
  answers: Record<string, string>;

  @Column({ type: 'enum', enum: ['pending', 'reviewed', 'shortlisted', 'rejected', 'hired'], default: 'pending' })
  status: ApplicationStatus;

  @OneToMany(() => Interview, interview => interview.application)
  interviews: Interview[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
} 