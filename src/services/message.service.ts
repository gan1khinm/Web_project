import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from '../entities/message.entity';

@Injectable()
export class MessageService {
    constructor(
        @InjectRepository(Message)
        private messageRepository: Repository<Message>,
    ) {}

    findAll(): Promise<Message[]> {
        return this.messageRepository.find();
    }

    create(messageData: Message): Promise<Message> {
        const newMessage = this.messageRepository.create(messageData);
        return this.messageRepository.save(newMessage);
    }
}
