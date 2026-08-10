import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) { }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findOne({ email });
        //ovde treba hesirati password i uporediti sa user.passwordHash
        if (user && user.passwordHash === password) {
            const { passwordHash, ...result } = user;
            return result;
        }
        return null;
    }

    async loginUser(email: string, password: string): Promise<any> {
        return await this.validateUser(email, password);
    }

    async registerUser(dto: CreateUserDto): Promise<any> {
        const email = dto.email;
        const checkUser = await this.userService.findOne({ email });
        if (checkUser) {
            return null;
        }
        //ovde treba hesirati password iz dto-a
        const realPasswordHash = dto.passwordHash;
        dto.passwordHash = realPasswordHash;
        return await this.userService.create(dto);
    }
}
