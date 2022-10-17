import { IsNumber } from 'class-validator/types/decorator/typechecker/IsNumber';
import { IsString } from 'class-validator/types/decorator/typechecker/IsString';
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
  @IsNumber()
  id: number;

  @Column('varchar', { name: 'position' })
  @IsString()
  position: string;

  @Column('bigint', { name: 'compensation' })
  @IsNumber()
  compensation: number;

  @Column('text', { name: 'contents' })
  @IsString()
  contents: string;

  @Column('text', { name: 'tech_stack' })
  @IsString()
  techStack: string;

  @ManyToOne(() => Company, (company) => company.recruitment, { eager: true })
  @JoinTable({
    name: 'company_info',
  })
  company: Company;
  nullable: false;

  @Column('int', { name: 'company_id' })
  @IsNumber()
  companyId: number;

  @OneToMany(() => Application, (application) => application.recruitment)
  applications: Application[];
}
