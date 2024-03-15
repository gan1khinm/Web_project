import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from '../entities/comment.entity';

@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(Comment)
        private commentRepository: Repository<Comment>,
    ) {}

    findAll(): Promise<Comment[]> {
        return this.commentRepository.find();
    }

    create(commentData: Comment): Promise<Comment> {
        const newComment = this.commentRepository.create(commentData);
        return this.commentRepository.save(newComment);
    }
}
