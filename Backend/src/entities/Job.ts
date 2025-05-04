import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { User } from './User';
import { Application } from './Application';
import { Skill } from './Skill';

@Entity()
export class Job {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column()
  description?: string;

  @Column()
  location!: string;

  @Column({ nullable: true })
  salary?: string;

  @Column()
  employmentType!: string; // Full-time, Part-time, Contract, etc.

  @ManyToOne(() => User, (user) => user.jobs)
  employer!: User;

  @OneToMany(() => Application, (application) => application.job)
  applications?: Application[];

  @ManyToMany(() => Skill)
  @JoinTable()
  requiredSkills!: Skill[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  postedAt!: Date;

  @Column({ type: 'timestamp', nullable: true })
  deadline?: Date;
}