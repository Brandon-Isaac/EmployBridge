import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { JobSeeker } from './job-seeker.entity';

@Entity('job_seeker_experiences')
export class JobSeekerExperience {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  company: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column()
  startDate: Date;

  @Column({ nullable: true })
  endDate: Date;

  @Column({ default: false })
  isCurrent: boolean;

  @Column({ nullable: true })
  location: string;

  @ManyToOne(() => JobSeeker, jobSeeker => jobSeeker.experiences)
  jobSeeker: JobSeeker;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
} 