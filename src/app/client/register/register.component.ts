import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { ErrorStateMatcher } from '@angular/material/core';

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
  constructor() { }
  get userName() {
    return this.form.get('userName')
  }
  ngOnInit() {
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
