import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { UserRole } from './enums/user.enum';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    @UseGuards(JwtAuthGuard)
    @Roles(UserRole.ADMIN)
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    @Roles(UserRole.ADMIN)
    findAll(@Query('search') search?: string,
        @Query('skip') skip?: number,
        @Query('take') take?: number) {
        return this.userService.findAll({
            skip: skip ? Number(skip) : 0,
            take: take ? Number(take) : 10,
            where: { email: { contains: search, mode: 'insensitive' } }
        });
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    @Roles(UserRole.ADMIN)
    findOne(@Param('id') id: string) {
        return this.userService.findOne({ id: Number(id) });
    }

    @Patch(':id')
    @UseGuards(JwtAuthGuard)
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update({ data: updateUserDto, where: { id: Number(id) } });
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    @Roles(UserRole.ADMIN)
    remove(@Param('id') id: string) {
        return this.userService.remove({ id: Number(id) });
    }
}
