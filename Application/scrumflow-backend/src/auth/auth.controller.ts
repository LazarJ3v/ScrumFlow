import { Controller, Post, Body, HttpStatus, HttpCode, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { RegisterDto } from './dto/register.dto';

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
    register(@Body() dto: RegisterDto){
        return this.authService.registerUser(dto);
    }
}
