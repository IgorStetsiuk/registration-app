import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {RegistrationComponent} from './registration/registration.component';
import {UserService} from './user.service';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {LoginComponent} from './login/login.component';
import {UserOverlookComponent} from './user-overlook/user-overlook.component';
import {UserDataComponent} from './user-data/user-data.component';
import {TimerComponent} from './timer/timer.component';

import {MdInputModule} from '@angular/material';
import {MdDatepickerModule, MdNativeDateModule} from '@angular/material';
import {AppRoutingModule} from './app-routing.module';
import {MdSortModule} from '@angular/material';
import {SearchUserPipe} from './user-overlook/search-user.pipe';


@NgModule({
    declarations: [
        AppComponent,
        RegistrationComponent,
        HomeComponent,
        ProfileComponent,
        LoginComponent,
        ForgotPasswordComponent,
        UserDataComponent,
        UserOverlookComponent,
        SearchUserPipe,
        TimerComponent,

    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        /*material design modules*/
        BrowserAnimationsModule,
        MdInputModule,
        MdDatepickerModule,
        MdNativeDateModule,
        AppRoutingModule,
        MdSortModule
    ],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
