/* eslint-disable prettier/prettier */
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Application } from './application.entity';

@Entity("applicants")
export class Applicants{
    @PrimaryGeneratedColumn({ type: "int", name: "applicant_id" })
    id: number;

    @Column("varchar", { name: "email", unique: true })
    email: string;

    @Column("varchar", { name: "password", nullable: true })
    passsword: string | null;

    @Column("tinyint", { name: "is_applied", default: false })
    isApplied: boolean | false;

    @OneToOne(() => Application, (application) => application)
    application: Application;
}