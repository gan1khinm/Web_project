import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';
import {CreateCommentDto} from "./create-comment.dto";

@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(Comment)
        private commentRepository: Repository<Comment>,
    ) {}

    findAll(): Promise<Comment[]> {
        return this.commentRepository.find();
    }

    create(commentData: CreateCommentDto): Promise<Comment[]> {
        // @ts-ignore
        const newComment = this.commentRepository.create(commentData);
        return this.commentRepository.save(newComment);
    }

    async delete(id: number): Promise<void> {
        await this.commentRepository.delete(id);
    }
}
