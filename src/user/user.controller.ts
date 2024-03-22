import { Controller, Get, Post, Body, Delete, Param } from "@nestjs/common";
import { ApiTags, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto } from './create-user.dto';

@ApiTags('users')
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    @ApiResponse({ status: 200, description: 'List of users.', type: User, isArray: true })
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post()
    @ApiResponse({ status: 201, description: 'The user has been successfully created.', type: User })
    @ApiBody({ type: CreateUserDto })
    create(@Body() userData: CreateUserDto): Promise<User> {
        return this.userService.create(userData);
    }

    @Delete(':id')
    @ApiResponse({ status: 204, description: 'The user has been successfully deleted.' })
    @ApiParam({ name: 'id', type: 'number' })
    delete(@Param('id') id: number): Promise<void> {
        return this.userService.delete(id);
    }
}
