import { ApiProperty } from '@nestjs/swagger';
import {IsNotEmpty} from "class-validator";

export class CreateCommentDto {
    // @ApiProperty()
    // readonly text: string;
    //
    // @ApiProperty()
    // readonly userId: number;
    @ApiProperty()
    @IsNotEmpty()
    readonly content: string;
}