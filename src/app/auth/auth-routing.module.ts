import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthMainComponent } from './auth-main/auth-main.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

 


 
const routes: Routes = [
    {
      path: '',
      component: AuthMainComponent,      
    },
    {
        path: 'auth/signin',
        component: LoginComponent
    },
    {
        path: 'auth/signup',
        component: SignupComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }