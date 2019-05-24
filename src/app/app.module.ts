import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormControl, Validators } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule } from '@angular/material';

  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponent } from './client/login/login.component';
import { RegisterComponent } from './client/register/register.component';
import { ForgotComponent } from './client/forgot/forgot.component';
import { SkillshaveComponent} from './client/skillshave/skillshave.component';
import {DesignComponent} from './client/design/design.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {HttpClientModule} from '@angular/common/http';


import {AngularFirestoreModule} from '@angular/fire/firestore';
import { Observable } from 'rxjs';


import { AuthService } from './service/auth.service';
import { ClientService } from './service/client.service';
import { HeaderComponent } from './client/header/header.component';
import { DasboardComponent } from './client/dasboard/dasboard.component';
import { SocialService } from './service/social.service';
import { AuthguardService } from './service/authguard.service';
import { AdminheaderComponent } from './admin/adminheader/adminheader.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdminuserComponent } from './admin/adminuser/adminuser.component';
import { AdminsidenavComponent } from './admin/adminsidenav/adminsidenav.component';
import { MyprofileComponent } from './client/myprofile/myprofile.component';
import { SkillsComponent } from './client/skills/skills.component';
import { AboutMComponent } from './client/about-m/about-m.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminloginComponent,
    ForgotComponent,
    SkillshaveComponent,
    HeaderComponent,
    DasboardComponent,
    DesignComponent,
    AdminheaderComponent,
    AdmindashboardComponent,
    AdminuserComponent,
    AdminsidenavComponent,
    MyprofileComponent,
    SkillsComponent,
    AboutMComponent
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)

    
  ],
  providers: [AuthService,ClientService, SocialService,AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
