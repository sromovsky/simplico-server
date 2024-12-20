import { Injectable } from '@nestjs/common';
import { User } from '../../types/user.interface';

@Injectable()
export class UsersService {
    private readonly REGISTERED_USERS: User[] = [];

    create(user: User) {
        this.REGISTERED_USERS.push(user);
    }

    findByUsername(username: string): User | undefined {
        return this.REGISTERED_USERS.find((user) => user.username === username);
    }
}
