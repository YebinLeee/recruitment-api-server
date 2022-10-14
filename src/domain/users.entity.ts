import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export abstract class Users {
  @PrimaryGeneratedColumn({ type: 'int', name: 'user_id' })
  id: number;

  @Column('varchar', { name: 'email', unique: true })
  email: string;

  @Column('varchar', { name: 'password', nullable: true })
  password: string | null;

  @Column('tinyint', { name: 'is_applied', default: false })
  isApplied: boolean | false;
}
