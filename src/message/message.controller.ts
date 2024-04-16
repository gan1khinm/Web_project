import { Controller, Get, Post, Body, Delete, Param, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiTags, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { MessageService } from './message.service';
import { Message } from './message.entity';
import { CreateMessageDto } from './create-message.dto';
import { AppGateway } from '../app.gateway'; // Импортируем AppGateway

@ApiTags('messages')
@Controller('messages')
export class MessageController {
    constructor(
        private readonly messageService: MessageService,
        private readonly appGateway: AppGateway
    ) {}

    @Get()
    @ApiResponse({ status: 200, description: 'List of messages.', type: Message, isArray: true })
    async findAll(): Promise<Message[]> {
        return this.messageService.findAll();
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiResponse({ status: 201, description: 'The message has been successfully created.', type: Message })
    @ApiBody({ type: CreateMessageDto })
    async create(@Body() messageData: CreateMessageDto): Promise<Message> {
        const createdMessage = await this.messageService.create(messageData);
        //console.log(messageData.content);
        return createdMessage;
    }

    @Delete(':id')
    @ApiResponse({ status: 204, description: 'The message has been successfully deleted.' })
    @ApiParam({ name: 'id', type: 'number' })
    async delete(@Param('id') id: number): Promise<void> {
        await this.messageService.delete(id);
    }
}
