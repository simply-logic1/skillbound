import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; 
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import { Observable,of } from 'rxjs';
import { switchMap} from 'rxjs/operators';
import { FbUser} from './user';
import {AngularFirestore,  AngularFirestoreDocument} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SocialService {
  uid$;
  user;
  property:any;
  usersdocument:any;
  authstate=null;
  error: any = null;
  data: Observable<any[]>;
  users$ : Observable<FbUser>;
  constructor( public afAuth:AngularFireAuth,private afs: AngularFirestore,
    private router: Router) {  
      
      this.user = this.afAuth.authState.pipe(switchMap(user => {
        if (user) {
          return this.afs.doc<FbUser>(`push/${user.uid}`).valueChanges()
        } else {
          return of(null)
        }
      })
    )
}
    
  onfblogin(){
    const provider = new firebase.auth.FacebookAuthProvider()
    
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        console.log(credential);
     console.log(credential.additionalUserInfo.profile)
    
       
        var checking = this.afs.doc<FbUser>(`users/${credential.user.uid}`).valueChanges();
      checking.subscribe(data => {
  console.log(data);
  if (!data) {
      console.log('exist user');
      
      this.router.navigate(['/dashboard']) 
      this.updateUserData(credential.user)
      
    } else {
     
      console.log('new user');


 this.router.navigate(['/myprofile']) 
 
     
     
    }
      })
   
 
      })
  }


  private updateUserData(user) {
    // Sets user data to firestore on login
console.log(user);
    const userRef: AngularFirestoreDocument<FbUser> = this.afs.doc(`push/${user.uid}`);

    const data: FbUser = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL+'?width=200&height=200',
     
      roles: {
        user: true
    }
      
    }
  
    return userRef.set(data)
  
  }
  
  
  signOut() {
    this.afAuth.auth.signOut().then(() => {
        this.router.navigate(['/']);
    });
  }


}
