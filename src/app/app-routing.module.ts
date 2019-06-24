import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './client/register/register.component';
import {LoginComponent} from './client/login/login.component';
import { ForgotComponent } from './client/forgot/forgot.component';
import { SkillshaveComponent } from './client/skillshave/skillshave.component';
import { HeaderComponent } from './client/header/header.component';
import {SkillsComponent} from './client/skills/skills.component';
import { DasboardComponent } from './client/dasboard/dasboard.component';
import { MyprofileComponent } from './client/myprofile/myprofile.component';
import { AuthguardService } from './service/authguard.service';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminheaderComponent } from './admin/adminheader/adminheader.component';
import { AdminuserComponent } from './admin/adminuser/adminuser.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import {AboutMComponent} from './client/about-m/about-m.component';
const routes: Routes = [
{path:'',component:LoginComponent},
{path: 'register', component: RegisterComponent},
{path:'forgot',component:ForgotComponent},
{path:'header',component:HeaderComponent},
{path:'dashboard',component:DasboardComponent},
{path:'oldprofile',component:MyprofileComponent},
{path:'myprofile',component:SkillsComponent},
{path:'about',component:AboutMComponent},
{path:'skillshave',component:SkillshaveComponent},
{path:'adlogin',component:AdminloginComponent},
{path:'adheader',component:AdminheaderComponent},
{path:'aduser',component:AdminuserComponent},
{path:'addashboard',component:AdmindashboardComponent},


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true})
      
  ],
  exports: [RouterModule],
  declarations: []
  
})
export class AppRoutingModule { 

}
