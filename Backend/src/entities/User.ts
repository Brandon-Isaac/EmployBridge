import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Job } from './Job';
import { Application } from './Application';
import { Portfolio } from './Portfolio';
import { CV } from './CV';
import { Experience } from './Experience';
import { Education } from './Education';
import { ChatMessage } from './ChatMessage';

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

  @OneToMany(() => Experience, (experience) => experience.user)
  experiences: Experience[];

@OneToMany(() => Education, (education) => education.user)
  educations: Education[];

@OneToMany(() => ChatMessage, (chatMessage) => chatMessage.user)
  chatMessages: ChatMessage[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}