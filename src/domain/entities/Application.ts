import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Recruitment } from './Recruitment';
import { Resume } from './Resume';
import { Users } from './Users';

@Index('recruitment_id_idx', ['recruitmentId'], {})
@Index('resume_id_idx', ['resumeId'], {})
@Index('user_application_id_idx', ['userApplicationId'], {})
@Entity('application', { schema: 'recruit_site' })
export class Application {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('int', { name: 'user_application_id' })
  userApplicationId: number;

  @Column('int', { name: 'recruitment_id' })
  recruitmentId: number;

  @Column('int', { name: 'resume_id', nullable: true })
  resumeId: number | null;

  @Column('date', { name: 'date_of_application' })
  dateOfApplication: string;

  @ManyToOne(() => Recruitment, (recruitment) => recruitment.applications, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'recruitment_id', referencedColumnName: 'id' }])
  recruitment: Recruitment;

  @ManyToOne(() => Resume, (resume) => resume.applications, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'resume_id', referencedColumnName: 'id' }])
  resume: Resume;

  @ManyToOne(() => Users, (users) => users.applications, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'user_application_id', referencedColumnName: 'id' }])
  userApplication: Users;
}
