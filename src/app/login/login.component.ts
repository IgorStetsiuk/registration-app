import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import {LoginService} from "./login.service";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [LoginService]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    users = [];

    constructor(private fb: FormBuilder,
                private router: Router,
                private userService: UserService,
                private loginService: LoginService) {
    }

    ngOnInit() {
        this.buildForm();
        this.users = this.userService.getAllUsers();
    }

    buildForm() {
        this.loginForm = this.fb.group({
            email: [null, Validators.required],
            password: [null, Validators.required]
        });
    }


    onSubmit(formControls) {
        const isValidUser = this.loginService.validateUser(this.users, formControls);
        if (isValidUser) {
            this.router.navigate(['/profile']);
        } else {
            alert('Incorrect password or email');
        }
    }

}
