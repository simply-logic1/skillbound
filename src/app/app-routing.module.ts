import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './client/register/register.component';
import {LoginComponent} from './client/login/login.component';
import { ForgotComponent } from './client/forgot/forgot.component';
import { SkillshaveComponent } from './client/skillshave/skillshave.component';
import { HeaderComponent } from './header/header.component';
import { DesignComponent } from './client/design/design.component';
const routes: Routes = [
{path:'login',component:LoginComponent},
{path: 'register', component: RegisterComponent},
{path:'forgot',component:ForgotComponent},
{path:'skillshave',component:SkillshaveComponent},
{path:'header',component:HeaderComponent},
{path:'design',component:DesignComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
