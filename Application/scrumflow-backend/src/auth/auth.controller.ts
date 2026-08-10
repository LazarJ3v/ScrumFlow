import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    logIn(@Body() login: { email: string, password: string}) {
        const {email, password} = login;
        return this.authService.loginUser(email, password);
    }
}
