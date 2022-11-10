import { Column, Entity } from 'typeorm';

@Entity('position', { schema: 'recruit_site' })
export class Position {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', length: 45 })
  name: string;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;
}
