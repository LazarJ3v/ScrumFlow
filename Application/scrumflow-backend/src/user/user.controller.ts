import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Get()
    findAll(@Query('search') search?: string,
        @Query('skip') skip?: number,
        @Query('take') take?: number) {
        return this.userService.findAll({
            skip: skip ? Number(skip) : 0,
            take: take ? Number(take) : 10,
            where: {email: {contains: search, mode: 'insensitive'}}
        });
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.userService.findOne({id: Number(id)});
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto){
        return this.userService.update({data: updateUserDto, where: {id: Number(id)}});
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.userService.remove({id: Number(id)});
    }
}
