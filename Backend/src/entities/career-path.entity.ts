import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './User';
import { Skill } from './Skill';

@Entity()
export class CareerPath {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => User, user => user.careerPaths)
  user!: User;

  @Column()
  targetRole!: string;  
  
  @Column()
  currentRole!: string;

  @Column()
  yearsOfExperience!: number;

  @Column('jsonb')
  timeline?: {
    phase: string;
    duration: string;
    activities: string[];
    milestones: string[];
  }[];

  @Column('jsonb')
  education?: {
    level: string;
    field: string;
    duration: string;
    requirements: string[];
  }[];

  @Column('jsonb')
  requiredSkills?: {
    current: Skill[];
    missing: Skill[];
    development: {
      skill: Skill;
      resources: string[];
      timeline: string;
    }[];
  };

  @Column('jsonb')
  alternativePaths?: {
    role: string;
    description: string;
    requiredSkills: Skill[];
    matchScore: number;
  }[];

  @Column({ default: false })
  isCompleted!: boolean;

  @Column({ type: 'float', default: 0 })
  progress?: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
} 