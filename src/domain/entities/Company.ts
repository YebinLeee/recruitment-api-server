import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Recruiters } from './Recruiters';
import { Recruitment } from './Recruitment';

@Index('company_name_UNIQUE', ['companyName'], { unique: true })
@Entity('company', { schema: 'recruit_site' })
export class Company {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('varchar', { name: 'company_name', unique: true, length: 45 })
  companyName: string;

  @OneToMany(() => Recruiters, (recruiters) => recruiters.company)
  recruiters: Recruiters[];

  @OneToMany(() => Recruitment, (recruitment) => recruitment.company)
  recruitments: Recruitment[];
}
