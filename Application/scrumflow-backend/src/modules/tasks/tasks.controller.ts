import { Controller, Get, Post, Param } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
    @Post()
    createTask(): string {
        return 'This action creates task'
    }

    @Get()
    findAll(): string {
        return 'This action returns all tasks';
    }

    @Get(':id')
    findOne(@Param() params: any): string {
        console.log(params.id);
        return `This action returns task with id ${params.id}`;
    }
}
