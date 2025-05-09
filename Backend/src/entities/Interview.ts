import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Application } from './Application';

export enum InterviewStatus {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
  CANCELLED = 'cancelled'
}

@Entity()
export class Interview {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Application, application => application.interview)
  application!: Application;

  @Column({ type: 'timestamp' })
  scheduledTime!: Date;

  @Column({
    type: 'enum',
    enum: InterviewStatus,
    default: InterviewStatus.PENDING
  })
  status!: InterviewStatus;

  @Column({ nullable: true })
  location!: string;

  @Column({ nullable: true, type: 'text' })
  notes!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
} 