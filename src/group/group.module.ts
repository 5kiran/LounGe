import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { GroupRepository } from 'src/common/repository/group.repository';
import { TagGroupRepository } from 'src/common/repository/tag.group.repository';
import { TagRepository } from 'src/common/repository/tag.repository';
import { UserGroupRepository } from 'src/common/repository/user.group.repository';
import { Group } from 'src/database/entities/group.entity';
import { TagGroup } from 'src/database/entities/tag-group.entity';
import { Tag } from 'src/database/entities/tag.entity';
import { UserGroup } from 'src/database/entities/user-group.entity';
import { GroupController } from './group.controller';
import { GroupService } from './group.service';
import { groupImageFactory } from './utils/group.img.multer';

@Module({
  imports: [
    NestjsFormDataModule,
    MulterModule.registerAsync({ useFactory: groupImageFactory }),
    TypeOrmModule.forFeature([Group, Tag, TagGroup, UserGroup]),
  ],
  controllers: [GroupController],
  providers: [
    GroupService,
    GroupRepository,
    UserGroupRepository,
    TagGroupRepository,
    TagRepository,
  ],
})
export class GroupModule {}