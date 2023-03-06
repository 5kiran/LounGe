import { IsNumber, IsString, IsArray, IsOptional } from 'class-validator';

export class newsfeedCheckDto {
    @IsString()
    content:string;

    @IsNumber()
    userId:number;

    @IsOptional()
    @IsArray()
    tag: Array<string> | null | string;

    @IsOptional()
    @IsArray()
    image:string;

}