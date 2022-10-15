import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Recruitment } from './recruitment.entity';
import { Users } from './users.entity';

@Entity('application')
export class Application {
  @PrimaryGeneratedColumn({ type: 'int', name: 'application_id' })
  id: number;

  @Column('text', { name: 'resume', nullable: true })
  resume: string;

  @OneToOne(() => Users)
  @JoinColumn({
    name: 'user_id',
  })
  user: Users;

  @ManyToOne(() => Recruitment, (recruitment) => recruitment.applications, {
    eager: false,
  })
  @JoinColumn({
    name: 'recruitment_id',
  })
  recruitment: Recruitment;
}
