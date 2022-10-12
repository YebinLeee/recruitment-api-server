/* eslint-disable prettier/prettier */
import { Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Recruitment } from "./recruitment.entity";
import { Applicants } from "./applicants.entity";


@Entity("application")
export class Application{
    @PrimaryGeneratedColumn({ type: "int", name: "application_id" })
    id: number;

    @OneToOne(() => Applicants, (applicant) => applicant.application)
    @JoinColumn({
        foreignKeyConstraintName: 'fk_application_id'
    })
    applicant: Applicants;

    @ManyToOne(() => Recruitment, (recruitment) => recruitment.applications, {eager:false})
    @JoinColumn({
        foreignKeyConstraintName: 'fk_recruitment_id'
    })
    recruitment: Recruitment;
}