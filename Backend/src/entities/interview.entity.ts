import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { JobApplication } from './job-application.entity';

export type InterviewType = 'phone' | 'video' | 'in-person';
export type InterviewStatus = 'scheduled' | 'completed' | 'cancelled';

@Entity('interviews')
export class Interview {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => JobApplication, application => application.interviews)
  application: JobApplication;

  @Column({ type: 'varchar', length: 50 })
  type: InterviewType;

  @Column({ type: 'timestamp' })
  scheduledAt: Date;

  @Column({ type: 'varchar', length: 200, nullable: true })
  location: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  meetingLink: string;

  @Column({ type: 'varchar', length: 50, default: 'scheduled' })
  status: InterviewStatus;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @Column({ type: 'text', nullable: true })
  feedback: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
} 