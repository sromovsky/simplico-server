import {
    ConflictException,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { RegisterData } from '../../types/register-data.interface';
import { LoginData } from '../../types/login-data.interface';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) {}

    async register(registerData: RegisterData) {
        const user = this.usersService.findByUsername(registerData.username);
        if (user) {
            throw new ConflictException('Username already exists');
        }

        const hashedPassword = await bcrypt.hash(registerData.password, 10);
        return this.usersService.create({
            ...registerData,
            password: hashedPassword,
        });
    }

    async login(loginData: LoginData) {
        const user = this.usersService.findByUsername(loginData.username);

        if (user && (await bcrypt.compare(loginData.password, user.password))) {
            const payload = { username: user.username };
            return { token: this.jwtService.sign(payload) };
        }

        throw new UnauthorizedException();
    }
}
