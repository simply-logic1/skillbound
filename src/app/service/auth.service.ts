import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; 
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import { Observable,of } from 'rxjs';
import { switchMap} from 'rxjs/operators';
import { User } from './user';
import { first, map, mergeMap, flatMap, take } from 'rxjs/operators';
import {AngularFirestore,  AngularFirestoreDocument} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uid$;
  user;
  property:any;
  usersdocument:any;
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
    // this.users$=this.afAuth.authState.pipe(
    //   switchMap(
    //   user =>{
    //     if(user){
    //       return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
    //     }
    //     else{
    //       return of(null) 
    //     }
    //   }
    //   )
    // )
    //facebook
    this.user = this.afAuth.authState
      .pipe(switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        } else {
          return of(null)
        }
      })
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
      
      this.router.navigate(['/dashboard'])
     
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
// onfblogin(){
//   const provider = new firebase.auth.FacebookAuthProvider()
  
//   return this.oAuthLogin(provider);
// }

// private oAuthLogin(provider) {
//   return this.afAuth.auth.signInWithPopup(provider)
//     .then((credential) => {
//       this.updateUserData(credential.user)
//       this.router.navigate(['/dashboard']);
//     })
// }


// private updateUserData(user) {
//   // Sets user data to firestore on login

//   const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

//   const data: User = {
//     uid: user.uid,
//     email: user.email,
//     displayName: user.displayName,
//     photoURL: user.photoURL,
//     roles: {
//       user: true
//   }
    
//   }

//   return userRef.set(data)

// }


// signOut() {
//   this.afAuth.auth.signOut().then(() => {
//       this.router.navigate(['/']);
//   });
// }
//register
registerclient(userd){
  return this.afAuth.auth.createUserWithEmailAndPassword(userd.email,userd.username)
  .then(
    (user)=>{
      this.authstate = user 
      this.getinfo(userd)
      this.userdata(userd, this.afAuth.auth.currentUser.uid ).then(()=>{console.log("updated")
      this.afAuth.auth.sendPasswordResetEmail(this.afAuth.auth.currentUser.email).then(() => this.router.navigate(['/'])).catch((e) => {
          console.log(e.message);
          return e
        })}).catch((e)=>console.log("not updated"))
        
    }
  ).catch(error => {
    
    throw error
  })
}
private userdata(user, uid) {

  const userRef$: AngularFirestoreDocument<any> = this.afs.doc<User>(`users/${uid}`);
  const userdata: User = {
      uid: uid,
      displayName: user.name,
      email: user.email,
    
      // url:user.url,
      roles: {
          user: true
      }
  }

  return userRef$.set(userdata, { merge: true })
}
getinfo(userd) {
    return this.afAuth.auth.onAuthStateChanged(function (user) {
      if (user) {
        user.updateProfile({
          displayName : userd.name,
          photoURL: "https://firebasestorage.googleapis.com/v0/b/agent-sync-sonderworks.appspot.com/o/userprofile%2Fuser.jpg?alt=media&token=d3b47a22-a861-4c7a-9104-bef874ea39bf"
        })
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;

        var providerData = user.providerData;
        
        var uids = user.uid;
        
        console.log(uids)
       
        
      }
    })
  }
  //forgot
  forgotemail(email)
  {
    return this.afAuth.auth.sendPasswordResetEmail(email).then(() => this.router.navigate(['/'])).catch(error => {

      throw error
    })
  }
}
