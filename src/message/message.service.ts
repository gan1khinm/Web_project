import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './message.entity';
import {CreateMessageDto} from "./create-message.dto";
import {AppGateway} from "../app.gateway";

@Injectable()
export class MessageService {
    constructor(
        @InjectRepository(Message)
        private messageRepository: Repository<Message>, private readonly appGateway: AppGateway
    ) {}

    async findAll(): Promise<Message[]> {
        return this.messageRepository.find();
    }

    async create(messageData: CreateMessageDto): Promise<Message> {
        const newMessage = this.messageRepository.create(messageData as Partial<Message>);
        const createdMessage = await this.messageRepository.save(newMessage);
        await this.appGateway.handleMessageCreated(createdMessage);
        return createdMessage;
    }

    async delete(id: number): Promise<void> {
        await this.messageRepository.delete(id);
    }
}
