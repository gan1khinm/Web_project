import { Controller, Get, Post, Body } from "@nestjs/common";
import { CommentService } from '../services/comment.service';
import { Comment } from '../entities/comment.entity';

@Controller('comments')
export class CommentController {
    constructor(private readonly commentService: CommentService) {}

    @Get()
    findAll(): Promise<Comment[]> {
        return this.commentService.findAll();
    }

    @Post()
    create(@Body() commentData: Comment): Promise<Comment> {
        return this.commentService.create(commentData);
    }
}
