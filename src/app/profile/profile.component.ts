import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    currentUserData;

    constructor() {
    }

    ngOnInit() {
        this.currentUserData = JSON.parse(localStorage.getItem('user'));
    }


}
