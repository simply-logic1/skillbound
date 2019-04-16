import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,
  RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

import { auth } from 'firebase';
import { tap, map, take } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private afAuth:AngularFireAuth,private router:Router) { }
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.afAuth.authState.pipe(
      take(1),
      map(user=> !! user),
      tap(loggedIn => {
        if(!loggedIn)
        {
         console.log("Access Denied from Authguard login")
         this.router.navigate(['/dashboard'])
        }
      })
    )
  }  
}
