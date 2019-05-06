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
   authState = null;
  error: any = null;
  data: Observable<any[]>;
  users$ : Observable<User>;
  

  constructor(private afAuth:AngularFireAuth,private afs:AngularFirestore,private router:Router) {
    console.log("retgert"+this.uid$);
    this.afAuth.authState.subscribe((auth)=>{
      if(auth){
        console.log('logged in');
        this. authState =auth
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
    return (this.authState !== null) ? this.authState.uid : 'no'
}

get currentUser(): any {
    return (this.authState !== null) ? this.authState: null;
}
get displayName():string{
  return (this.authState !== null) ? this.authState['displayName'] : ""
}

get email():string{
  return (this.authState !== null) ? this.authState['email'] : ""
}
get isUserEmailLoggedIn(): boolean {
  if (this.authState !== null)  {
      return true
  } else {
      return false
  }
}
login(email: string, pass: string) {
  return this.afAuth.auth.signInWithEmailAndPassword(email, pass).then(
    (user) => {
    
      this.authState = user
      
     
      // this.getinfo()

 this.router.navigate(['/dashboard'])   
     
     
    }
  ).catch(error => {

    throw error
  })
}
adminlogin(email: string, pass: string) {
  return this.afAuth.auth.signInWithEmailAndPassword(email, pass).then(
    (user) => {

      this.authState = user
      // this.getinfo()

      this.router.navigate(['/addashboard'])

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

//register
registerclient(userd){
  return this.afAuth.auth.createUserWithEmailAndPassword(userd.email,userd.phone)
  .then(
    (user)=>{
      this.authState = user 
      this.getinfo(userd)
     
      this.updateuserdata(userd, this.afAuth.auth.currentUser.uid ).then(()=>{console.log("updated")
      this.afAuth.auth.sendPasswordResetEmail(this.afAuth.auth.currentUser.email).then(() => this.router.navigate(['/'])).catch((e) => {
          console.log(e.message);
          return e
        })
      }).catch((e)=>console.log("not updated"))
        
    }
  ).catch(error => {
    
    throw error
  })
}
private updateuserdata(user, uid) {

  const userRef$: AngularFirestoreDocument<any> = this.afs.doc<User>(`users/${uid}`);
  const userdata: User = {
      uid: uid,
      displayName: user.name,
      
      email: user.email,
     phonenumber: user.phone,
      // url:user.url,
      roles: {
          user: true
      }
  }

  return userRef$.set(userdata, { merge: true })
}
private userdata(user, uid) {

  const userRef$: AngularFirestoreDocument<any> = this.afs.doc<User>(`users/${uid}`);
  const userdata: User = {
      uid: uid,
      displayName: user.name,
      email: user.email,
     phonenumber: user.phone,
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
          photoURL: 'https://firebasestorage.googleapis.com/v0/b/skilbound.appspot.com/o/image%2Fimages.png?alt=media&token=16804003-ae51-4b79-8319-0d31d9d4901a'
        })
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;

        var providerData = user.providerData;
        var phone = user.phoneNumber;
        var uids = user.uid;
        
        console.log(uids+displayName+photoURL+email)
       
        
      }
    })
  }
  get profiledata() {
   
    const givenemail = this.email;

    const data = this.afs.collection(`users`, ref => ref.where('email', '==', givenemail)).valueChanges().pipe(take(1)).subscribe(res=>{return res})
    console.log(data)
    return this.data
  }
  signOut(): void {
    this.afAuth.auth.signOut().then(() => this.router.navigate(['/']))
      
    }
  //forgot
  forgotemail(email)
  {
    return this.afAuth.auth.sendPasswordResetEmail(email).then(() => this.router.navigate(['/'])).catch(error => {

      throw error
    })
  }
}
