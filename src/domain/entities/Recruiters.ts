import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Company } from './Company';
import { Users } from './Users';
import { Recruitment } from './Recruitment';

@Index('company_id_idx', ['companyId'], {})
@Index('user_id_idx', ['userId'], {})
@Entity('recruiters', { schema: 'recruit_site' })
export class Recruiters {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('int', { name: 'company_id' })
  companyId: number;

  @ManyToOne(() => Company, (company) => company.recruiters, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'company_id', referencedColumnName: 'id' }])
  company: Company;

  @ManyToOne(() => Users, (users) => users.recruiters, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: Users;

  @OneToMany(() => Recruitment, (recruitment) => recruitment.recruiter)
  recruitments: Recruitment[];
}
