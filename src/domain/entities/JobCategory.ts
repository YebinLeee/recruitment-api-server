import { Column, Entity } from 'typeorm';

@Entity('job_category', { schema: 'recruit_site' })
export class JobCategory {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', length: 100 })
  name: string;
}
