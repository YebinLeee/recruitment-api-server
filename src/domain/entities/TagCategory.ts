import { Column, Entity, OneToMany } from 'typeorm';
import { Tags } from './Tags';

@Entity('tag_category', { schema: 'recruit_site' })
export class TagCategory {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', nullable: true, length: 45 })
  name: string | null;

  @OneToMany(() => Tags, (tags) => tags.tagCategory)
  tags: Tags[];
}
