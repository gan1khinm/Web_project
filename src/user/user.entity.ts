import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import {Message} from '../message/message.entity';
import { Comment } from '../comment/comment.entity';
import {ApiProperty} from "@nestjs/swagger";

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

    @OneToMany(() => Message, message => message.author)
    posts: Message[];

    @OneToMany(() => Comment, comment => comment.author)
    comments: Comment[];
}
