import {Column, Entity, ManyToOne, PrimaryGeneratedColumn, RelationOptions} from 'typeorm';
import { Message } from '../message/message.entity';
import { User } from '../user/user.entity';
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @Column()
    @ApiProperty()
    content: string;

    @ManyToOne(() => User, user => user.comments)
    @ApiProperty({type:() => User})
    commentAuthor: User;

    @ManyToOne(() => Message, message => message.comments)
    @ApiProperty({type:() => Message})
    message: Message;
}