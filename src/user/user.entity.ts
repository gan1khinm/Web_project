import {Entity, PrimaryGeneratedColumn, Column, OneToMany, RelationOptions} from 'typeorm';
import { Message } from '../message/message.entity';
import { Comment } from '../comment/comment.entity';
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @Column()
    @ApiProperty()
    email: string;

    @Column()
    @ApiProperty()
    login: string;

    @Column()
    @ApiProperty()
    password: string;

    @OneToMany(() => Message, message => message.messageAuthor)
    @ApiProperty({type: () => Message})
    posts: Message[];

    @OneToMany(() => Comment, comment => comment.commentAuthor)
    @ApiProperty({type:() => Comment})
    comments: Comment[];
}