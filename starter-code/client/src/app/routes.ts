
import { Routes } from '@angular/router';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';


export const routes: Routes = [
    { path: './auth-login/auth-login', component: AuthLoginComponent },
    { path: './auth-signup/auth-signup', component: AuthSignupComponent },
    { path: '**', redirectTo: '' },
];