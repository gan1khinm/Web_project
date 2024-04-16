import {Entity, PrimaryGeneratedColumn, Column, OneToMany, RelationOptions} from 'typeorm';
import { Message } from '../message/message.entity';
import { Comment } from '../comment/comment.entity';
import { ApiProperty } from "@nestjs/swagger";
import {IsEmail, IsNotEmpty} from "class-validator";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @Column()
    @IsEmail()
    @ApiProperty()
    email: string;

    @Column()
    name: string;

    // @Column()
    // Role: Roles;

    @OneToMany(() => Message, message => message.messageAuthor)
    @ApiProperty({type: () => Message})
    posts: Message[];

    @OneToMany(() => Comment, comment => comment.commentAuthor)
    @ApiProperty({type:() => Comment})
    comments: Comment[];
}