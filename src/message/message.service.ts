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
        //console.log(messageData.content);
        await this.appGateway.handleMessageCreated(messageData);
        return this.messageRepository.save(newMessage);
    }

    async delete(id: number): Promise<void> {
        await this.messageRepository.delete(id);
    }
}
