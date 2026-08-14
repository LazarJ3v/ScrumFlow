import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Team } from 'generated/prisma/browser';

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) { }

  async create(data: Prisma.TeamUncheckedCreateInput) {
    return this.prisma.team.create({ data });
  }

  async findAll(params: {
    skip?: number,
    take?: number,
    cursor?: Prisma.TeamWhereUniqueInput,
    where?: Prisma.TeamWhereInput,
    orderBy?: Prisma.TeamOrderByWithRelationInput
  }): Promise<Team[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.team.findMany({ skip, take, cursor, where, orderBy });
  }

  async findOne(query: Prisma.TeamWhereUniqueInput): Promise<Team> {
    return this.prisma.team.findUnique({ where: query });
  }

  async update(params: { data: Prisma.TeamUncheckedUpdateInput, where: Prisma.TeamWhereUniqueInput }): Promise<Team> {
    const { data, where } = params;
    return this.prisma.team.update({ data, where });
  }

  remove(query: Prisma.TeamWhereUniqueInput) {
    return this.prisma.team.delete({ where: query });
  }
}
