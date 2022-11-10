import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Application } from './Application';
import { Company } from './Company';
import { Recruiters } from './Recruiters';

@Index('company_id_idx', ['companyId'], {})
@Index('recruiter_id_idx', ['recruiterId'], {})
@Entity('recruitment', { schema: 'recruit_site' })
export class Recruitment {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('varchar', { name: 'position', length: 255 })
  position: string;

  @Column('bigint', { name: 'compensation_for_applicant', nullable: true })
  compensationForApplicant: string | null;

  @Column('bigint', { name: 'compensation_for_recommender', nullable: true })
  compensationForRecommender: string | null;

  @Column('varchar', { name: 'contents', nullable: true, length: 255 })
  contents: string | null;

  @Column('varchar', { name: 'tech_stack', nullable: true, length: 45 })
  techStack: string | null;

  @Column('int', { name: 'company_id' })
  companyId: number;

  @Column('int', { name: 'recruiter_id' })
  recruiterId: number;

  @Column('date', { name: 'start_recruit_date' })
  startRecruitDate: string;

  @Column('date', { name: 'deadline_date' })
  deadlineDate: string;

  @Column('int', { name: 'response_rate', nullable: true })
  responseRate: number | null;

  @OneToMany(() => Application, (application) => application.recruitment)
  applications: Application[];

  @ManyToOne(() => Company, (company) => company.recruitments, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'company_id', referencedColumnName: 'id' }])
  company: Company;

  @ManyToOne(() => Recruiters, (recruiters) => recruiters.recruitments, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'recruiter_id', referencedColumnName: 'id' }])
  recruiter: Recruiters;
}
