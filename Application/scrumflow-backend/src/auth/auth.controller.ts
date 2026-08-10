import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    logIn(@Body() dto: LoginDto) {
        return this.authService.loginUser(dto);
    }

    @HttpCode(HttpStatus.OK)
    @Post('register')
    register(@Body() dto: CreateUserDto){
        return this.authService.registerUser(dto);
    }
}
