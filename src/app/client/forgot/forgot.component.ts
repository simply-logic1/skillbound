import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  form = new FormGroup({
email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
  })
  constructor(public auth:AuthService) { }
  forgot(value)
  {
   
    this.auth.forgotemail(value);
    
  }

  ngOnInit() {
  }
  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!");
      this.form.reset();
    }
  }
}
