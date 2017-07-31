import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private fb: FormBuilder, private router: Router) {
    }

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.loginForm = this.fb.group({
            'email': [null, this.validateEmail],
        });
    }

    onSubmit() {
        this.router.navigate(['/profile']);
    }

    validateEmail(em: FormControl) {
        const email = localStorage.getItem('userEmail');
        return email === em.value ? null : {
            validatePassword: {
                valid: false
            }
        };
    }
}
