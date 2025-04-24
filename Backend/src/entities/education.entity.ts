import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { JobSeeker } from './job-seeker.entity';

@Entity('education')
export class Education {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => JobSeeker, jobSeeker => jobSeeker.education)
  jobSeeker: JobSeeker;

  @Column({ type: 'varchar', length: 200 })
  institution: string;

  @Column({ type: 'varchar', length: 200 })
  degree: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  fieldOfStudy: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  location: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'timestamp' })
  startDate: Date;

  @Column({ type: 'timestamp', nullable: true })
  endDate: Date;

  @Column({ type: 'boolean', default: false })
  isCurrent: boolean;

  @Column({ type: 'varchar', length: 50, nullable: true })
  grade: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
} 