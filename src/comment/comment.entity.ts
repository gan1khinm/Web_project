import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import {Message} from '../message/message.entity';
import { User } from '../user/user.entity';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @ManyToOne(() => User, user => user.comments)
    author: User;

    @ManyToOne(() => Message, message => message.comments)
    message: Message;
}