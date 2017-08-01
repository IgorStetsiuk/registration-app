import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {Sort} from '@angular/material';

@Component({
    selector: 'app-user-overlook',
    templateUrl: './user-overlook.component.html',
    styleUrls: ['./user-overlook.component.css']
})
export class UserOverlookComponent implements OnInit {
    users;
    sortedData;

    constructor(private userService: UserService) {
        this.users = this.userService.getAllUsers();
    }

    ngOnInit() {
    }

    sortData(sort: Sort) {
        const data = this.users;
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }

        this.sortedData = data.sort((a, b) => {
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
    }
}
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

