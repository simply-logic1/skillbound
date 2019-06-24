import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore,  AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable,of,BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  displayName: string;
  name;
  email;
  phone;
  
  constructor(private auth :AuthService,private router:Router,private afAuth:AngularFireAuth,private afs:AngularFirestore,
    private http:HttpClient) { }
    private country:string;
    public bscountry: BehaviorSubject<any> = new BehaviorSubject<any>(this.country);
  clientlogin(email,pass){
    return this.auth.login(email, pass).catch(error => {

      throw error
    })   
  }
  adminlogin(email, pass) {
    // this.uid$ = this.afAuth.auth.currentUser.uid;
    // console.log(this.getuserdata(this.uid$)+"isis")
    return this.auth.adminlogin(email, pass).catch(error => {

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
getUsername()
  {
    return this.afAuth.auth.currentUser.displayName;
  } 
  setcountry(country): void {
    this.country =country;
    this.bscountry.next(this.country);
    console.log(this.country);
  
  }
  updatecountry(country)
{
  this.setcountry(country)
} 
}
