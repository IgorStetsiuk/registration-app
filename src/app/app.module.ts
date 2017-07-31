import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RegistrationComponent} from './registration/registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MdInputModule} from '@angular/material';
import {MdDatepickerModule, MdNativeDateModule} from '@angular/material';
import {UserService} from './user.service';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';

import {AppRoutingModule} from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserDataComponent } from './user-data/user-data.component';


@NgModule({
    declarations: [
        AppComponent,
        RegistrationComponent,
        HomeComponent,
        ProfileComponent,
        LoginComponent,
        ForgotPasswordComponent,
        UserDataComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MdInputModule,
        MdDatepickerModule,
        MdNativeDateModule,
        AppRoutingModule
    ],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
