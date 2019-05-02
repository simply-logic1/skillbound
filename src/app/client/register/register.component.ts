import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl,NgForm } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { ErrorStateMatcher } from '@angular/material/core';
import {ClientService} from '../../service/client.service';
import { Router } from '@angular/router';
import { User } from '../../service/user';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  error: { name: string, message: string } = { name: '', message: '' };

  constructor(public cli:ClientService,public router:Router) { }
  register(registerForm:User)
  {
    this.cli.register(registerForm).catch(_error=>{
     this.error = _error;
    
      return this.error
   })
   
  }
  resetForm(registerForm?: NgForm) {
    if (registerForm != null)
      registerForm.reset();
  }
  ngOnInit() {
    this.resetForm();
  }
  }