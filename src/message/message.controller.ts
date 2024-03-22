import { Controller, Get, Post, Body, Delete, Param } from "@nestjs/common";
import { ApiTags, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { MessageService } from './message.service';
import { Message } from './message.entity';
import { CreateMessageDto } from './create-message.dto';

@ApiTags('messages')
@Controller('messages')
export class MessageController {
    constructor(private readonly messageService: MessageService) {}

    @Get()
    @ApiResponse({ status: 200, description: 'List of messages.', type: Message, isArray: true })
    findAll(): Promise<Message[]> {
        return this.messageService.findAll();
    }

    @Post()
    @ApiResponse({ status: 201, description: 'The message has been successfully created.', type: Message })
    @ApiBody({ type: CreateMessageDto })
    create(@Body() messageData: CreateMessageDto): Promise<Message> {
        return this.messageService.create(messageData);
    }

    @Delete(':id')
    @ApiResponse({ status: 204, description: 'The message has been successfully deleted.' })
    @ApiParam({ name: 'id', type: 'number' })
    delete(@Param('id') id: number): Promise<void> {
        return this.messageService.delete(id);
    }
}
