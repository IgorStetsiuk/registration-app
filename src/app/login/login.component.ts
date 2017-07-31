import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from "../user.service";
import {User} from "../user";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    users = [];

    constructor(private fb: FormBuilder,
                private router: Router,
                private userService: UserService) {
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


    onSubmit() {

        this.router.navigate(['/profile']);
        debugger;
        const a = this.loginForm.value;
    }


}
