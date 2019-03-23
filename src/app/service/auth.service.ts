import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; 
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import { Observable,of } from 'rxjs';
import { switchMap} from 'rxjs/operators';
import { User } from './user';
import { auth} from 'firebase/app'
import { first, map, mergeMap, flatMap, take } from 'rxjs/operators';
import {AngularFirestore,  AngularFirestoreDocument} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uid$;
  user;
  authstate=null;
  error: any = null;
  data: Observable<any[]>;
  users$ : Observable<User>;
  

  constructor(private afAuth:AngularFireAuth,private afs:AngularFirestore,private router:Router) {
    console.log("retgert"+this.uid$);
    this.afAuth.authState.subscribe((auth)=>{
      if(auth){
        console.log('logged in');
        this.authstate=auth
        const uida=this.afAuth.auth.currentUser.uid;
        if(uida !=null||uida!=undefined){
          console.log(uida +"is htns");
          this.uid$
        }
      }  
        else
        {
          this.router.navigate(['/'])
          console.log('not logged in');
        }
      
    });
    this.users$=this.afAuth.authState.pipe(
      switchMap(
      user =>{
        if(user){
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        }
        else{
          return of(null) 
        }
      }
      )
    )
   }
   get currentUserId(): string {
    return (this.authstate !== null) ? this.authstate.uid : 'no'
}

get currentUser(): any {
    return (this.authstate !== null) ? this.authstate : null;
}
get displayName():string{
  return (this.authstate !== null) ? this.authstate['displayName'] : ""
}

get email():string{
  return (this.authstate !== null) ? this.authstate['email'] : ""
}
get isUserEmailLoggedIn(): boolean {
  if (this.authstate !== null)  {
      return true
  } else {
      return false
  }
}
login(email: string, pass: string) {
  return this.afAuth.auth.signInWithEmailAndPassword(email, pass).then(
    (user) => {
    
      this.authstate = user
      // this.getinfo()
      
      this.router.navigate([''])
     
    }
  ).catch(error => {

    throw error
  })
}
getuserdata():any {
    
  const uid = this.afAuth.auth.currentUser.uid;
 
  console.log("uidss is" + uid);
  const userRef$ = this.afs.collection('users').doc(uid);
  // this.afs.doc<User>(`users/${uid}`);
}
//Facebook login starts


}
