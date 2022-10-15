import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Application } from './application.entity';
import { Company } from './company.entity';

@Entity('recruitment')
export class Recruitment {
  @PrimaryGeneratedColumn({ type: 'int', name: 'recruitment_id' })
  id: number;

  @Column('varchar', { name: 'position' })
  position: string;

  @Column('bigint', { name: 'compensation' })
  compensation: number;

  @Column('text', { name: 'contents' })
  contents: string;

  @Column('text', { name: 'tech_stack' })
  techStack: string;

  @ManyToOne(() => Company, (company) => company.recruitment, { eager: true })
  @JoinTable({
    name: 'company_info',
  })
  company: Company;
  nullable: false;

  @Column('int', { name: 'company_id' })
  companyId: number;

  @OneToMany(() => Application, (application) => application.recruitment)
  applications: Application[];
}
