import {Injectable} from '@angular/core';
import {Sort} from '@angular/material';

@Injectable()
export class UserOverlookService {

    sortData(sort: Sort, users, sortedData) {
        const data = users;
        if (!sort.active || sort.direction === '') {
            sortedData = data;
            return sortedData;
        }

        sortedData = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'name':
                    return compare(a.name, b.name, isAsc);
                case 'lastname':
                    return compare(+a.lastname, +b.lastname, isAsc);
                case 'dateOfBirth':
                    return compare(+a.dateOfBirth, +b.dateOfBirth, isAsc);
                case 'email':
                    return compare(+a.email, +b.email, isAsc);
                default:
                    return 0;
            }
        });
        return sortedData;
    }

}

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}