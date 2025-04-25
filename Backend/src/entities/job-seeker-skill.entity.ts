import { Entity, PrimaryColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { JobSeeker } from "./job-seeker.entity";
import { Skill } from "./skill.entity";

@Entity("job_seeker_skills")
export class JobSeekerSkill {
    @PrimaryColumn({ type: "uuid" })
    jobSeekerId: string;

    @PrimaryColumn({ type: "uuid" })
    skillId: string;

    @ManyToOne(() => JobSeeker, jobSeeker => jobSeeker.skills, { onDelete: "CASCADE" })
    @JoinColumn({ name: "jobSeekerId" })
    jobSeeker: JobSeeker;

    @ManyToOne(() => Skill, skill => skill.jobSeekerSkills, { onDelete: "CASCADE" })
    @JoinColumn({ name: "skillId" })
    skill: Skill;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
} 