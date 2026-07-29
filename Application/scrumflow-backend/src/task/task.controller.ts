import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TaskService } from './task.service';
import { UpdateTaskDto } from './dto/update-task.dto';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Post()
  create(@Body() dto: CreateTaskDto) {
    const data = {
      ...dto,
      createdBy: {connect: {id: dto.createdById}},
      backlogItem: {connect: {id: dto.backlogItemId}}
    }
    return this.taskService.create(data);
  }

  @Get()
  findAll(@Query('search') search?: string,
    @Query('skip') skip?: number,
    @Query('take') take?: number) {
    return this.taskService.findAll({
      skip: skip ? Number(skip) : 0,
      take: take ? Number(take) : 10,
      where: { title: { contains: search, mode: 'insensitive' } }
    });
  }

  @Get(':id')
  findOne(@Query('id') id: string) {
    return this.taskService.findOne({id: Number(id)});
  }

  @Patch(':id')
  update(@Query('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update({data: updateTaskDto, where: {id: Number(id)}});
  }

  @Delete(':id')
  remove(@Query('id') id: string) {
    return this.taskService.remove({id: Number(id)});
  }
}
