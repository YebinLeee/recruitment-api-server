import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Application } from './Application';
import { Users } from './Users';

@Index('user_resume_id_idx', ['userResumeId'], {})
@Entity('resume', { schema: 'recruit_site' })
export class Resume {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('int', { name: 'user_resume_id' })
  userResumeId: number;

  @Column('text', { name: 'contents', nullable: true })
  contents: string | null;

  @OneToMany(() => Application, (application) => application.resume)
  applications: Application[];

  @ManyToOne(() => Users, (users) => users.resumes, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'user_resume_id', referencedColumnName: 'id' }])
  userResume: Users;
}
