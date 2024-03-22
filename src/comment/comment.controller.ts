import { Controller, Get, Post, Body, Delete, Param } from "@nestjs/common";
import { ApiTags, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { CommentService } from './comment.service';
import { Comment } from './comment.entity';
import { CreateCommentDto } from './create-comment.dto';

@ApiTags('comments')
@Controller('comments')
export class CommentController {
    constructor(private readonly commentService: CommentService) {}

    @Get()
    @ApiResponse({ status: 200, description: 'List of comments.', type: Comment, isArray: true })
    findAll(): Promise<Comment[]> {
        return this.commentService.findAll();
    }

    @Post()
    @ApiResponse({ status: 201, description: 'The comment has been successfully created.', type: Comment })
    @ApiBody({ type: CreateCommentDto })
    create(@Body() commentData: CreateCommentDto): Promise<Comment> {
        return this.commentService.create(commentData);
    }

    @Delete(':id')
    @ApiResponse({ status: 204, description: 'The comment has been successfully deleted.' })
    @ApiParam({ name: 'id', type: 'number' })
    delete(@Param('id') id: number): Promise<void> {
        return this.commentService.delete(id);
    }
}
