import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { NewsFeed } from 'src/database/entities/newsFeed.entity';
import { newsfeedCheckDto } from './dto/newsfeed-check.dto';
import { modiNewsfeedCheckDto } from './dto/modinewsfeed-check.dto';
import { NewsfeedService } from './newsfeed.service';
import { serchtagnewsfeedCheckDto } from './dto/serchtagnewsfeed.dto';

@Controller('api/newsfeed')
export class NewsfeedController {
  constructor(private readonly newsfeedService: NewsfeedService) {}

  // 뉴스피드 작성
  @Post('newsfeed')
  async postnewsfeed(@Body() data: newsfeedCheckDto): Promise<void> {
    return await this.newsfeedService.postnewsfeed(data);
  }

  // 뉴스피드 읽기
  @Get('newsfeed/:id')
  async readnewsfeed(@Param('id') userId: number) {
    return await this.newsfeedService.readnewsfeed(userId);
  }

  // 뉴스피드 삭제
  @Delete('newsfeed/:newsfeedid')
  async deletenewsfeed(
      @Param('newsfeedid')newsfeedid:number
  ) {
      return await this.newsfeedService.deletenewsfeed(newsfeedid)
  }

  // 뉴스피드 수정
  @Put('newsfeed/:newsfeedid')
  async modinewsfeed(
      @Param('newsfeedid') newsfeedid:number,
      @Body() data: modiNewsfeedCheckDto
  ): Promise<void> {
      return await this.newsfeedService.modinewsfeed(newsfeedid,data)
  }

  // 태그로 뉴스피드 검색
  @Get('/tag/newsfeed')
  async serchtagnewsfeed(
    @Body() data:serchtagnewsfeedCheckDto
  ){
    return await this.newsfeedService.serchtagnewsfeed(data)
  }
}
