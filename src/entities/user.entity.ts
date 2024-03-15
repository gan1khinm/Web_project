import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import {Message} from './message.entity';
import { Comment } from './comment.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    login: string;

    @Column()
    password: string;

    @OneToMany(() => Message, message => message.author)
    posts: Message[];

    @OneToMany(() => Comment, comment => comment.author)
    comments: Comment[];
}
