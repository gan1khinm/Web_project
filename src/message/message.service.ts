import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './message.entity';
import {CreateMessageDto} from "./create-message.dto";

@Injectable()
export class MessageService {
    constructor(
        @InjectRepository(Message)
        private messageRepository: Repository<Message>,
    ) {}

    findAll(): Promise<Message[]> {
        return this.messageRepository.find();
    }

    create(messageData: CreateMessageDto): Promise<Message[]> {
        // @ts-ignore
        const newMessage = this.messageRepository.create(messageData);
        return this.messageRepository.save(newMessage);
    }

    async delete(id: number): Promise<void> {
        await this.messageRepository.delete(id);
    }
}
