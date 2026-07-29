import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Task, Prisma } from 'generated/prisma/client';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {

  }

  async create(data: Prisma.TaskUncheckedCreateInput) {
    return this.prisma.task.create({ data });
  }

  async findAll(params: {
    skip?: number,
    take?: number,
    cursor?: Prisma.TaskWhereUniqueInput,
    where?: Prisma.TaskWhereInput,
    orderBy?: Prisma.TaskOrderByWithRelationInput
  }): Promise<Task[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.task.findMany({ skip, take, cursor, where, orderBy });
  }

  async findOne(query: Prisma.TaskWhereUniqueInput): Promise<Task> {
    return this.prisma.task.findUnique({ where: query });
  }

  async update(params: { data: Prisma.TaskUncheckedUpdateInput, where: Prisma.TaskWhereUniqueInput }): Promise<Task> {
    const { data, where } = params;
    return this.prisma.task.update({ data, where });
  }

  remove(query: Prisma.TaskWhereUniqueInput) {
    return this.prisma.task.delete({where: query});
  }
}
