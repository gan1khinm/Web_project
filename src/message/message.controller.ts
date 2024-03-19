import { Controller, Get, Post, Body, Delete, Param } from "@nestjs/common";
import { ApiTags, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger'; // Импортируем декораторы Swagger
import { MessageService } from './message.service';
import { Message } from './message.entity';
import { CreateMessageDto } from './create-message.dto';

@ApiTags('messages') // Добавляем тег для группировки связанных эндпоинтов в документации Swagger
@Controller('messages')
export class MessageController {
    constructor(private readonly messageService: MessageService) {}

    @Get()
    @ApiResponse({ status: 200, description: 'List of messages.', type: Message, isArray: true }) // Добавляем описание ответа
    findAll(): Promise<Message[]> {
        return this.messageService.findAll();
    }

    @Post()
    @ApiResponse({ status: 201, description: 'The message has been successfully created.', type: Message }) // Добавляем описание ответа
    @ApiBody({ type: CreateMessageDto }) // Добавляем описание тела запроса
    create(@Body() messageData: CreateMessageDto): Promise<Message[]> {
        return this.messageService.create(messageData);
    }

    @Delete(':id')
    @ApiResponse({ status: 204, description: 'The message has been successfully deleted.' }) // Добавляем описание ответа
    @ApiParam({ name: 'id', type: 'number' }) // Добавляем описание параметра пути
    delete(@Param('id') id: number): Promise<void> {
        return this.messageService.delete(id);
    }
}
