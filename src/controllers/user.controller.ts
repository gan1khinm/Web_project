import { Controller, Get, Post, Body } from "@nestjs/common";
import { UserService } from '../services/user.service';
import { User } from '../entities/user.entity';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post()
    create(@Body() userData: User): Promise<User> {
        return this.userService.create(userData);
    }
}
