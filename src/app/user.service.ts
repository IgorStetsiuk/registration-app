import {Injectable} from '@angular/core';
import {User} from './user';


@Injectable()
export class UserService {
    usersList = [];

    constructor() {
    }


    addUser(userData: User): void {
        localStorage.setItem('user', JSON.stringify(userData));
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
        return [...usersObj];
    }

    findUserByEmail(userEmail) {
        let rez = null;
        this.getAllUsers().forEach((user => {
            if (user.email === userEmail) {
                rez = user;
            }
        }));
        return rez;
    }

}
