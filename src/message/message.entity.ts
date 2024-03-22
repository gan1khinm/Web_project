import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, RelationOptions} from 'typeorm';
import { User } from '../user/user.entity';
import { Comment } from '../comment/comment.entity';
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @Column()
    @ApiProperty()
    title: string;

    @Column()
    @ApiProperty()
    content: string;

    @ManyToOne(() => User, user => user.posts)
    @ApiProperty({type:() => User})
    messageAuthor: User;

    @OneToMany(() => Comment, comment => comment.message)
    @ApiProperty({type:() => Comment})
    comments: Comment[];
}
