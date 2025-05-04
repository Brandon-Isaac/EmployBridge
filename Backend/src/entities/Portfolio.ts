import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from './User';

@Entity()
export class Portfolio {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @OneToOne(() => User, (user) => user.portfolio)
  @JoinColumn()
  user!: User;

  @Column({ type: 'jsonb', nullable: true })
  projects?: Array<{
    title: string;
    description: string;
    skillsUsed: string[];
    url?: string;
  }>;

  @Column({ type: 'jsonb', nullable: true })
  experience?: Array<{
    position: string;
    company: string;
    duration: string;
    description: string;
  }>;

  @Column({ type: 'jsonb', nullable: true })
  education?: Array<{
    degree: string;
    institution: string;
    year: string;
  }>;
}