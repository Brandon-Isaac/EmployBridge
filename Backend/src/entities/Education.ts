import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity()
export class Education {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  institution!: string;

  @Column()
  degree?: string;

  @Column()
  fieldOfStudy!: string;

  @Column()
  startDate!: Date;

  @Column({ nullable: true })
  endDate?: Date;

  @Column({ default: false })
  current?: boolean;

  @Column('text', { nullable: true })
  description?: string;

  @ManyToOne(() => User, (user) => user.educations)
  user?: User;
}