import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './client/register/register.component';
import {LoginComponent} from './client/login/login.component';
import { ForgotComponent } from './client/forgot/forgot.component';
import { SkillshaveComponent } from './client/skillshave/skillshave.component';
import { HeaderComponent } from './client/header/header.component';
import { DasboardComponent } from './client/dasboard/dasboard.component';
import { AuthguardService } from './service/authguard.service';

const routes: Routes = [
{path:'',component:LoginComponent},
{path: 'register', component: RegisterComponent},
{path:'forgot',component:ForgotComponent},
{path:'skillshave',component:SkillshaveComponent},
{path:'header',component:HeaderComponent},
{path:'dashboard',component:DasboardComponent,canActivate:[AuthguardService]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true } )
  ],
  exports: [RouterModule],
  declarations: []
  
})
export class AppRoutingModule { 

}
