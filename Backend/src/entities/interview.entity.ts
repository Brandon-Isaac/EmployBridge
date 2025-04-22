import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { JobApplication } from './job-application.entity';

export type InterviewType = 'phone' | 'video' | 'in-person';
export type InterviewStatus = 'scheduled' | 'completed' | 'cancelled' | 'rescheduled';

@Entity('interviews')
export class Interview {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => JobApplication, application => application.interviews)
  application: JobApplication;

  @Column({ type: 'timestamp' })
  date: Date;

  @Column({ type: 'enum', enum: ['phone', 'video', 'in-person'] })
  type: InterviewType;

  @Column({ type: 'varchar', length: 255, nullable: true })
  location: string;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @Column({ type: 'enum', enum: ['scheduled', 'completed', 'cancelled', 'rescheduled'], default: 'scheduled' })
  status: InterviewStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
} 