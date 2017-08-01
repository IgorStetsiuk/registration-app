import {Injectable} from '@angular/core';
import {User} from './user';


@Injectable()
export class UserService {
    usersList = [];

    constructor() {
    }


    addUser(userData: User): void {
        this.usersList = JSON.parse(localStorage.getItem('users')) || [];
        this.usersList.push({
            name: userData.name,
            lastname: userData.lastname,
            email: userData.email,
            dateOfBirth: userData.date,
            password: userData.password
        });
        localStorage.setItem('users', JSON.stringify(this.usersList));
    }

    getAllUsers() {
        const usersObj = JSON.parse(localStorage.getItem('users'));
        return  [...usersObj];
    }

}
