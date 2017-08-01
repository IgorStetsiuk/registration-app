import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'searchUser',
    pure: false
})
export class SearchUserPipe implements PipeTransform {

    transform(users: any, letters: string): any {
        if (letters === undefined || letters === '') {
            return [];

        }
        return users.filter((user) => {
            return user.name.toLowerCase().includes(letters.toLowerCase())
                || user.email.toLowerCase().includes(letters.toLowerCase());
        });
    }

}
