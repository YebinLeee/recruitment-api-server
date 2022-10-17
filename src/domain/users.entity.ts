import { IsBoolean } from 'class-validator/types/decorator/typechecker/IsBoolean';
import { IsNumber } from 'class-validator/types/decorator/typechecker/IsNumber';
import { IsString } from 'class-validator/types/decorator/typechecker/IsString';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export abstract class Users {
  @PrimaryGeneratedColumn({ type: 'int', name: 'user_id' })
  @IsNumber()
  id: number;

  @Column('varchar', { name: 'email', unique: true })
  @IsString()
  email: string;

  @Column('varchar', { name: 'password', nullable: true })
  @IsString()
  password: string | null;

  @Column('tinyint', { name: 'is_applied', default: false })
  @IsBoolean()
  isApplied: boolean | false;
}
