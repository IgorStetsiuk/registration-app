import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {UserService} from "../user.service"
import {User} from "../user";
import {Router} from '@angular/router';


@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
    regForm: FormGroup;



    constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    }

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.regForm = this.fb.group({
            'name': [null, Validators.required],
            'lastName': [null, Validators.compose([Validators.required, Validators.min(3)])],
            'email': [null, Validators.email],
            'date': '',
            'password': [null, Validators.minLength(3)]
        });
    }


    yearFilter(date: Date): boolean {
        return date.getFullYear() > 2016;
    }

    onCreate(user: User) {
        this.userService.addUser(user);
        this.router.navigate(['/profile']);
    }

}
