/* eslint-disable prettier/prettier */
import { Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

import { Recruitment } from "./recruitment.entity";
import { Applicants } from "./applicatns.entity";


@Entity("application")
export class Application{
    @PrimaryGeneratedColumn({ type: "int", name: "application_id" })
    id: number;

    @OneToOne(() => Applicants, (applicant) => applicant.application)
    applicant: Applicants;

    @ManyToOne(() => Recruitment, (recruitment) => recruitment.applications, {eager:false})
    recruitment: Recruitment;
}