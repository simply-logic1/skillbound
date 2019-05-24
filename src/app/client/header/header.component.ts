import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import {SocialService} from '../../service/social.service';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore'
import { Observable,of } from 'rxjs';
import { switchMap} from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  profile:any;
  userid:any
  empty:any;
  constructor(private Auth:AuthService,private afAuth : AngularFireAuth,private afs: AngularFirestore) { }

  ngOnInit() {
    this.userid = this.afAuth.auth.currentUser.uid;
    console.log(this.userid);
    this.profile= this.afs.doc(`push/${this.userid}`).valueChanges();
  }
  
}
