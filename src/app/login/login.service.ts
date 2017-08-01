import {Injectable} from '@angular/core';
import {User} from '../user';


@Injectable()
export class LoginService {

    validateUser(users: User [], formsControls): boolean {
        let result = false;
        users.forEach((user) => {
            if (user.email === formsControls.email && user.password === formsControls.password) {
                result = true;
            }
        });
        return result;
    }
}