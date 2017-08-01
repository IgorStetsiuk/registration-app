import {Injectable} from '@angular/core';
import {User} from "../user";


@Injectable()
export class LoginService {

    validateUser(users: User [], formsControls): boolean {
        debugger;
        let result = false;
        console.log(users.length + '' + formsControls);
        users.forEach((user) => {
            if (user.email === formsControls.email && user.password === formsControls.password) {
                result = true;
            }
        });
        return result;
    }

    some() {
    }
}