import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './User';

export enum CVType {
  CV = 'cv',
  COVER_LETTER = 'cover_letter',
  RESUME = 'resume'
}

export enum CVStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived'
}

@Entity()
export class CV {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @OneToOne(() => User, (user) => user.cv)
  @JoinColumn()
  user!: User;

  @Column()
  fileName?: string;

  @Column()
  filePath?: string;

  @Column({
    type: 'enum',
    enum: CVType,
    default: CVType.CV
  })
  type!: CVType;

  @Column({
    type: 'enum',
    enum: CVStatus,
    default: CVStatus.DRAFT
  })
  status!: CVStatus;

  @Column({ type: 'jsonb', nullable: true })
  extractedSkills?: string[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  uploadedAt!: Date;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}