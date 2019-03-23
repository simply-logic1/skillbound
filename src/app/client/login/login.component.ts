import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../service/client.service';
import { AuthService } from '../../service/auth.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[ ClientService]

})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
 password = new FormControl('', [Validators.required]);


  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  getError(){
    return this.password.hasError('required') ? 'You must enter a value' :
            '';
  }
   hide=true;
// email;
// password;
// error: { name: string, message: string } = { name: '', message: '' };

//   constructor(public cli:ClientService,public auth:AuthService) { }
// login(email,password){
//   if(email){
//     this.cli.clientlogin(email,password).catch(_error=>{
//       this.error = _error;
//       this.resetForm()
//       return this.error
      
//     })
    
//   }
// }
// resetForm(loginform?: NgForm) {
//   if (loginform != null)
//     loginform.reset();
// }    
  ngOnInit() {
    // this.resetForm()
  }

}
