import { Controller, Post, Body, HttpStatus, HttpCode, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @UseGuards(LocalAuthGuard)
    @Post('login')
    logIn(@Request() req) {
        return this.authService.loginUser(req.user);
    }

    @HttpCode(HttpStatus.OK)
    @Post('register')
    register(@Body() dto: CreateUserDto){
        return this.authService.registerUser(dto);
    }
}
