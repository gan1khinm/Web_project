import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty()
    readonly email: string;

    @ApiProperty()
    readonly login: string;

    @ApiProperty()
    readonly password: string;
}