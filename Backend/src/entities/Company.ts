import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './User';
import { Job } from './Job';

@Entity()
export class Company {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @Column()
    industry!: string;

    @Column()
    location!: string;

    @OneToMany(() => Job, job => job.employer)
    jobs?: Job[];

    @Column({ nullable: true })
    website!: string;

    @Column({ nullable: true })
    logo?: string;

    @Column({ default: 0 })
    employeeCount?: number;

    @OneToMany(() => User, user => user.company)
    employees?: User[];

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
} 