import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export type MilestoneStatus = 'completed' | 'in-progress' | 'upcoming';

@Entity('career_paths')
export class CareerPath {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 200 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar', length: 100 })
  currentLevel: string;

  @Column({ type: 'varchar', length: 100 })
  nextLevel: string;

  @Column({ type: 'integer' })
  progress: number;

  @Column('simple-array')
  requiredSkills: string[];

  @Column('jsonb')
  milestones: {
    title: string;
    description: string;
    status: MilestoneStatus;
    skills: string[];
    timeframe: string;
  }[];

  @Column({ type: 'text', nullable: true })
  aiPrompt: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
} 