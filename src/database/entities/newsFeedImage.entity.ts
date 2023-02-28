import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { NewsFeed } from './newsFeed.entity';

@Entity()
export class NewsFeedImage extends BaseEntity {
  @PrimaryGeneratedColumn()
  newsImageId: number;

  @Column()
  image: string;

  @ManyToOne(() => NewsFeed, (newsFeed) => newsFeed.newsImages)
  newsFeed: NewsFeed;
}
