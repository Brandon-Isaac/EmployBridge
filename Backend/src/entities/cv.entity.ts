import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn,  ManyToMany } from 'typeorm';
import { JobSeeker } from './job-seeker.entity';
import { Skill } from './skill.entity';

export enum CVTemplate {
  MODERN = 'modern',
  CLASSIC = 'classic',
  CREATIVE = 'creative',
  MINIMAL = 'minimal'
}

@Entity('cvs')
export class CV {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => JobSeeker, jobSeeker => jobSeeker.cvs)
  jobSeeker: JobSeeker;

  @Column()
  title: string;

  @Column({
    type: 'enum',
    enum: CVTemplate,
    default: CVTemplate.MODERN
  })
  template: CVTemplate;

  @Column({ type: 'text', nullable: true })
  summary: string;

  @Column({ type: 'jsonb' })
  experience: {
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: Date;
    endDate: Date | null;
    current: boolean;
    description: string;
    achievements: string[];
  }[];

  @Column({ type: 'jsonb' })
  education: {
    id: string;
    degree: string;
    institution: string;
    field: string;
    startDate: Date;
    endDate: Date | null;
    current: boolean;
    description: string;
  }[];

  @Column({ type: 'jsonb', nullable: true })
  certifications: {
    id: string;
    name: string;
    issuer: string;
    date: Date;
    expiryDate: Date | null;
    credentialId: string;
    credentialUrl: string;
  }[];

  @Column({ type: 'jsonb', nullable: true })
  languages: {
    id: string;
    language: string;
    proficiency: string;
  }[];

  @ManyToMany(() => Skill, (skill: Skill) => skill.cvs)
  skills: Skill[];

  @Column({ type: 'jsonb', nullable: true })
  customSections: {
    id: string;
    title: string;
    items: {
      id: string;
      title: string;
      description: string;
      date?: Date;
    }[];
  }[];

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  isDefault: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
} 