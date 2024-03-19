import { Controller, Get, Post, Body, Delete, Param } from "@nestjs/common";
import { ApiTags, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger'; // Импортируем декораторы Swagger
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto } from './create-user.dto';

@ApiTags('users') // Добавляем тег для группировки связанных эндпоинтов в документации Swagger
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    @ApiResponse({ status: 200, description: 'List of users.', type: User, isArray: true }) // Добавляем описание ответа
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post()
    @ApiResponse({ status: 201, description: 'The user has been successfully created.', type: User }) // Добавляем описание ответа
    @ApiBody({ type: CreateUserDto }) // Добавляем описание тела запроса
    create(@Body() userData: CreateUserDto): Promise<User> {
        return this.userService.create(userData);
    }

    @Delete(':id')
    @ApiResponse({ status: 204, description: 'The user has been successfully deleted.' }) // Добавляем описание ответа
    @ApiParam({ name: 'id', type: 'number' }) // Добавляем описание параметра пути
    delete(@Param('id') id: number): Promise<void> {
        return this.userService.delete(id);
    }
}
