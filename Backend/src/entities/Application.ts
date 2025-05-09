import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './User';
import { Job } from './Job';
import { Interview } from './Interview';

export enum ApplicationStatus {
  PENDING = 'PENDING',
  REVIEWED = 'REVIEWED',
  INTERVIEW = 'INTERVIEW',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED'
}

@Entity()
export class Application {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => User)
  user!: User;

  @ManyToOne(() => Job)
  job!: Job;

  @Column({ type: 'text', nullable: true })
  coverLetter!: string;

  @Column({
    type: 'enum',
   enum: ['PENDING', 'REVIEWED','INTERVIEW', 'ACCEPTED', 'REJECTED'],
    default: ApplicationStatus.PENDING
  })
  status!: ApplicationStatus;

  @OneToOne(() => Interview, interview => interview.application)
  interview?: Interview;


  @Column({ type: 'timestamp', nullable: true })
  interviewDate?: Date;

  @Column({ type: 'float', nullable: true })
  matchScore!: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  appliedAt!: Date;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}