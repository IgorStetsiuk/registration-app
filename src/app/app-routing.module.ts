import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {UserDataComponent} from "./user-data/user-data.component";
import {UserOverlookComponent} from "./user-overlook/user-overlook.component";
import {TimerComponent} from "./timer/timer.component";



const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'registration',
        component: RegistrationComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'profile',
        component: ProfileComponent,
        children: [
            {
                path: 'user-overlook',
                component: UserOverlookComponent
            }, {
                path: 'timer',
                component: TimerComponent
            }
        ]
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        children: [
            {
                path: 'user-data',
                component: UserDataComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}