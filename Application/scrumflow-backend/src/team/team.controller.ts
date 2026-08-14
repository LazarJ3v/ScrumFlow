import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { JoinTeamDto } from './dto/join-team.dto';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) { }

  @Post()
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamService.create(createTeamDto);
  }

  @Get()
  findAll(@Query('search') search?: string,
    @Query('skip') skip?: number,
    @Query('take') take?: number) {
    return this.teamService.findAll({
      skip: skip ? Number(skip) : 0,
      take: take ? Number(take) : 10,
      where: { name: { contains: search, mode: 'insensitive' } }
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamService.findOne({ id: Number(id) });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamService.update({ data: updateTeamDto, where: { id: Number(id) } });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamService.remove({ id: Number(id) });
  }

  @Post('join')
  join(@Body() data: JoinTeamDto) {
    return this.teamService.join(data);
  }
}
