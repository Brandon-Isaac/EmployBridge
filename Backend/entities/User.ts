import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Job } from './Job';
import { Application } from './Application';
import { Portfolio } from './Portfolio';
import { CV } from './CV';

export enum UserRole {
  JOB_SEEKER = 'job_seeker',
  EMPLOYER = 'employer',
  ADMIN = 'admin',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.JOB_SEEKER,
  })
  role: UserRole;

  @Column({ nullable: true })
  company?: string;

  @Column({ nullable: true })
  position?: string;

  @Column({ nullable: true })
  bio?: string;

  @OneToMany(() => Job, (job) => job.employer)
  jobs?: Job[];

  @OneToMany(() => Application, (application) => application.user)
  applications?: Application[];

  @OneToOne(() => Portfolio, (portfolio) => portfolio.user)
  @JoinColumn()
  portfolio?: Portfolio;

  @OneToOne(() => CV, (cv) => cv.user)
  @JoinColumn()
  cv?: CV;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}