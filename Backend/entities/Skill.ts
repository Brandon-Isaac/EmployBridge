import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { User } from './User';
import { Job } from './Job';

@Entity()
export class Skill {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column()
  category: string;

  @Column({ nullable: true })
  description?: string;

  @ManyToMany(() => User, (user) => user.skills)
  @JoinTable()
  users: User[];

  @ManyToMany(() => Job, (job) => job.requiredSkills)
  @JoinTable()
  jobs: Job[];
}