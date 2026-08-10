import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) { }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findOne({ email });
        //ovde treba hesirati password i uporediti sa user.passwordHash
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
            access_token: this.jwtService.sign(payload)
        }
    }

    async registerUser(dto: CreateUserDto): Promise<any> {
        const checkUser = await this.userService.findOne({ email: dto.email });
        if (checkUser) {
            return null;
        }
        //ovde treba hesirati password iz dto-a
        const realPasswordHash = await bcrypt.hash(dto.passwordHash, 20);
        const user = await this.userService.create({...dto, passwordHash: realPasswordHash});
        return this.loginUser(user);
    }
}
