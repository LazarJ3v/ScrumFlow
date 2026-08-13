import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { UserRole } from 'src/user/enums/user.enum';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) { }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findOne({ email });
        if (user) {
            const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
            if (isPasswordValid) {
                const { passwordHash, ...result } = user;
                return result;
            }
        }
        return null;
    }

    async loginUser(user: any): Promise<any> {
        const payload = {
            sub: user.id,
            email: user.email,
            role: user.role,
        };
        return {
            user,
            access_token: this.jwtService.sign(payload)
        }
    }

    async registerUser(dto: RegisterDto): Promise<any> {
        const checkUser = await this.userService.findOne({ email: dto.email });
        if (checkUser) {
            return null;
        }
        const passwordHash = await bcrypt.hash(dto.password, 10);
        const createDto: CreateUserDto = {
            firstName: dto.firstName,
            lastName: dto.lastName,
            email: dto.email,
            passwordHash: passwordHash,
            role: UserRole[dto.role],
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date(),
            lastLoginAt: new Date()
        }
        const user = await this.userService.create(createDto);
        return this.loginUser(user);
    }
}
