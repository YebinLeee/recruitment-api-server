/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Application } from "./application.entity";
import { Company } from "./company.entity";

@Entity("recruitment")
export class Recruitment{
    @PrimaryGeneratedColumn({ type: "int", name: "recruitment_id" })
    id: number;

    @Column("varchar", { name: "position" })
    position: string;

    @Column("bigint", { name: "compensation" })
    compensation: number;

    @Column("text", { name: "contents" })
    contents: string;

    @Column("text", { name: "tech_stack" })
    techStack: string;

    @ManyToOne(() => Company, (company) => company.recruitments, { eager: false })
    @JoinColumn({ 
        foreignKeyConstraintName: 'fk_company_id'
      })
    company: Company;

    @OneToMany(() => Application, application => application.recruitment, { eager: true })
    @JoinColumn({
        foreignKeyConstraintName: 'fk_applicant_id'
    })
    applications: Application[];
}