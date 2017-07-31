import {Injectable} from '@angular/core';
import {User} from './user';


@Injectable()
export class UserService {
    user: User;
    usersList: Array<User>;

    constructor() {
        this.usersList = [];
    }

    addUser(userData: User): void {
        localStorage.setItem('userEmail', userData.email);
        this.usersList.push(new User(userData.name, userData.lastname, userData.email, userData.date, userData.password));

    }
    // addToLockalStorage(user:User){
    //     localStorage.setItem('users':)
    // }
    getUserById() {

    }
}