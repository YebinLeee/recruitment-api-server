import { IsNumber, IsString } from 'class-validator/types/decorator/decorators';
import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Recruitment } from './recruitment.entity';

@Entity('company')
export class Company {
  @PrimaryGeneratedColumn({ type: 'int', name: 'company_id' })
  @IsNumber()
  id: number;

  @Column('varchar', { name: 'company_name' })
  @IsString()
  companyName: string;

  @Column('varchar', { name: 'country', length: 100 })
  @IsString()
  country: string;

  @Column('varchar', { name: 'region', length: 30 })
  @IsString()
  region: string;

  @OneToMany(() => Recruitment, (recruitment) => recruitment.company)
  @JoinTable({
    name: 'recruitments',
  })
  recruitment: Recruitment[];
}
