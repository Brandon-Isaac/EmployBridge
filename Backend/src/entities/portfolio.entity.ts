import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, ManyToMany } from 'typeorm';
import { JobSeeker } from './job-seeker.entity';
import { Skill } from './skill.entity';

export enum PortfolioItemType {
  PROJECT = 'project',
  CERTIFICATION = 'certification',
  ACHIEVEMENT = 'achievement',
  PUBLICATION = 'publication',
  OTHER = 'other'
}

@Entity('portfolio_items')
export class PortfolioItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => JobSeeker, jobSeeker => jobSeeker.portfolios)
  jobSeeker: JobSeeker;

  @Column()
  title: string;

  @Column({
    type: 'enum',
    enum: PortfolioItemType
  })
  type: PortfolioItemType;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'text', nullable: true })
  url: string;

  @Column({ type: 'jsonb', nullable: true })
  media: {
    type: string;
    url: string;
    thumbnailUrl?: string;
  }[];

  @Column({ type: 'jsonb', nullable: true })
  links: {
    title: string;
    url: string;
  }[];

  @ManyToMany(() => Skill, (skill: Skill) => skill.portfolioItems)
  skills: Skill[];

  @Column({ type: 'date', nullable: true })
  startDate: Date;

  @Column({ type: 'date', nullable: true })
  endDate: Date;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
} 