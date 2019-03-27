import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl,NgForm } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { ErrorStateMatcher } from '@angular/material/core';
import {ClientService} from '../../service/client.service';
import { Router } from '@angular/router';
import { User } from '../../service/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    // confirmpassword: new FormControl('', [
    //   Validators.required,]
    // ),


  });
  error: { name: string, message: string } = { name: '', message: '' };

  constructor(public cli:ClientService,public router:Router) { }
  register(registerForm:User)
  {
    this.cli.register(registerForm).catch(_error=>{
      this.error=_error;
      return this.error
    })
  }
  resetForm(registerForm?: NgForm) {
    if (registerForm != null)
      registerForm.reset();
  }
  get userName() {
    return this.form.get('userName')
  }
  ngOnInit() {
    this.resetForm();
  }
  // onSubmit() {
  //   alert(JSON.stringify(this.form.value));
  // }
  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!");
      this.form.reset();
    }
  }
}