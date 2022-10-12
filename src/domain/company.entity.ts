/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Recruitment } from "./recruitment.entity";

@Entity('comapny')
export class Company{
    @PrimaryGeneratedColumn({ type: "int", name: "company_id" })
    id: number;

    @Column("varchar", { name: "company_name" })
    companyName: string;

    @Column("varchar", { name: "country", length: 100 })
    country: string;

    @Column("varchar", { name: "region", length: 30 })
    region: string;

    @OneToMany(() => Recruitment, recruitment => recruitment.company, {eager: true})
    @JoinColumn({
        foreignKeyConstraintName: 'fk_recruitment_id'
    })
    recruitments: Recruitment[];
}