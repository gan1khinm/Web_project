import { ApiProperty } from '@nestjs/swagger';
import {IsEmail, IsNotEmpty} from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsEmail()
    readonly email: string;

    @ApiProperty()
    @IsNotEmpty()
    readonly name: string;
}