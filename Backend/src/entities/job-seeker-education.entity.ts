import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { JobSeeker } from './job-seeker.entity';

@Entity('job_seeker_educations')
export class JobSeekerEducation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  institution: string;

  @Column()
  degree: string;

  @Column({ nullable: true })
  fieldOfStudy: string;

  @Column()
  startDate: Date;

  @Column({ nullable: true })
  endDate: Date;

  @Column({ default: false })
  isCurrent: boolean;

  @Column({ type: 'text', nullable: true })
  description: string;

  @ManyToOne(() => JobSeeker, jobSeeker => jobSeeker.education)
  jobSeeker: JobSeeker;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
} 