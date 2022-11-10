import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Application } from './Application';
import { Recruiters } from './Recruiters';
import { Resume } from './Resume';

@Index('email_UNIQUE', ['email'], { unique: true })
@Entity('users', { schema: 'recruit_site' })
export class Users {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('varchar', { name: 'email', unique: true, length: 45 })
  email: string;

  @Column('varchar', { name: 'password', length: 45 })
  password: string;

  @Column('tinyint', { name: 'is_recruiter', default: () => "'0'" })
  isRecruiter: number;

  @OneToMany(() => Application, (application) => application.userApplication)
  applications: Application[];

  @OneToMany(() => Recruiters, (recruiters) => recruiters.user)
  recruiters: Recruiters[];

  @OneToMany(() => Resume, (resume) => resume.userResume)
  resumes: Resume[];
}
