import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore,  AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private auth :AuthService,private router:Router,private afAuth:AngularFireAuth,private afs:AngularFirestore,
    private http:HttpClient) { }
  clientlogin(email,pass){
    return this.auth.login(email, pass).catch(error => {

      throw error
    })   
  }
  //register
  register(registerForm){
    return this.auth.registerclient(registerForm)
  }
  
  public getJSON(): Observable<any> {
    return this.http.get ("../../assets/categories.json");
}
}
