import { Injectable } from '@nestjs/common';
import { Tag } from 'src/database/entities/tag.entity';
import { DataSource, Like, Repository, InsertResult } from 'typeorm';

@Injectable()
export class TagRepository extends Repository<Tag> {
  constructor(private dataSource: DataSource) {
    super(Tag, dataSource.createEntityManager());
  }

  serchTagOne(tag:string) {
    return this.findOneBy({tagName:tag})
  }

  createTag(tag:string) {
    return this.insert({tagName:tag})
  }

  serchTagOneForNewsfeed(tag:string){
    return this.findOne({
      where: {tagName:tag},
      select: ["id"]}
      )
  }

  serchTagWord(tag:string) {
    return this.find({
      where: { tagName: Like(`%${tag}%`) },
      select: ['id']
    })
  }

  async foundTags(tags): Promise<Tag[]> {
    return await this.createQueryBuilder('tag')
      .where('tag.tagName IN (:...tags)', { tags })
      .getMany();
  }

  async createTags(newTagNames): Promise<InsertResult> {
    return await this.createQueryBuilder()
      .insert()
      .into(Tag)
      .values(newTagNames)
      .execute();
  }
}
