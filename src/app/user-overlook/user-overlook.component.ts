import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Sort} from '@angular/material';
import {UserOverlookService} from './user-overlook.service'



@Component({
    selector: 'app-user-overlook',
    templateUrl: './user-overlook.component.html',
    styleUrls: ['./user-overlook.component.css'],
    providers: [UserOverlookService],
})

export class UserOverlookComponent implements OnInit {
    users;
    sortedData;
    letters;


    constructor(private userService: UserService,
                private userOverlookService: UserOverlookService) {
    }

    ngOnInit() {
        this.users = this.userService.getAllUsers();
    }

    sortData(sort: Sort) {
        this.sortedData = this.userOverlookService.sortData(sort, this.users, this.sortedData);
    }

}


