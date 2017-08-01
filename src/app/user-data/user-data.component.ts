import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-user-data',
    templateUrl: './user-data.component.html',
    styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
    userName: string;
    userEmail;

    constructor() {
    }

    ngOnInit() {
        this.userEmail = JSON.parse(localStorage.getItem('user')).email;
        this.userName = JSON.parse(localStorage.getItem('user')).name;
    }

}
