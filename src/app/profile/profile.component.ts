import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import {UserService} from "../user.service";


@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    userEmail;
    currentUserData;

    constructor(private route: ActivatedRoute,
                private userService: UserService) {

    }

    ngOnInit() {

        this.userEmail = this.route.snapshot.queryParams.email;
        this.currentUserData = this.userService.findUserByEmail(this.userEmail);


    }


}
