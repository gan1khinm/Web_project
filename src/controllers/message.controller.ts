import { Controller, Get, Post, Body } from "@nestjs/common";
import { MessageService } from '../services/message.service';
import { Message } from '../entities/message.entity';

@Controller('messages')
export class MessageController {
    constructor(private readonly messageService: MessageService) {}

    @Get()
    findAll(): Promise<Message[]> {
        return this.messageService.findAll();
    }

    @Post()
    create(@Body() messageData: Message): Promise<Message> {
        return this.messageService.create(messageData);
    }
}
