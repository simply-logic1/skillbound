import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; 
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import { Observable,of } from 'rxjs';
import { switchMap} from 'rxjs/operators';
import { User } from './user';
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
  users$ : Observable<User>;
  constructor( public afAuth:AngularFireAuth,private afs: AngularFirestore,
    private router: Router) {  
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
      this.user = this.afAuth.authState.pipe(switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
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
        this.updateUserData(credential.user)
        this.router.navigate(['/dashboard']);
      })
  }


  private updateUserData(user) {
    // Sets user data to firestore on login

    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
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
