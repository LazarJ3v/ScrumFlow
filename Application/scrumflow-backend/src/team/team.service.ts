import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Team, User } from 'generated/prisma/browser';
import { JoinTeamDto } from './dto/join-team.dto';

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) { }

  async create(data: Prisma.TeamUncheckedCreateInput) {
    const team = await this.prisma.team.create({ data });

    await this.prisma.teamMember.create({
      data: {
        teamId: team.id,
        userId: team.createdById,
      }
    });

    return team;
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

  async join(joinTeamDto: JoinTeamDto) {
    const { userId, joinCode } = joinTeamDto;
    const team = await this.prisma.team.findUnique({ where: { joinCode: joinCode } })

    if (!team) {
      throw new NotFoundException('Tim sa ovim kodom ne postoji');
    }

    const alreadyInTeam = await this.prisma.teamMember.findUnique({
      where: {
        teamId_userId: {
          teamId: team.id,
          userId
        }
      }
    });

    if(alreadyInTeam) {
      throw new ConflictException('Korisnik je vec clan ovog tima');
    }

    await this.prisma.teamMember.create({
      data: {
        teamId: team.id,
        userId
      }
    });

    return team;
  }
}
