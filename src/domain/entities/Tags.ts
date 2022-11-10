import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TagCategory } from './TagCategory';

@Index('tag_category_id_idx', ['tagCategoryId'], {})
@Entity('tags', { schema: 'recruit_site' })
export class Tags {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('int', { name: 'tag_category_id', nullable: true })
  tagCategoryId: number | null;

  @Column('int', { name: 'name', nullable: true })
  name: number | null;

  @ManyToOne(() => TagCategory, (tagCategory) => tagCategory.tags, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'tag_category_id', referencedColumnName: 'id' }])
  tagCategory: TagCategory;
}
