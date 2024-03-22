import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageDto {
    @ApiProperty()
    readonly text: string;

    @ApiProperty()
    readonly userId: number;
}