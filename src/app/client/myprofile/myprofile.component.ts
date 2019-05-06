import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore'
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  profile:any;
  userid:any;
  details:any;
  constructor(private afAuth : AngularFireAuth,private afs: AngularFirestore) { }

  ngOnInit() {
    this.userid = this.afAuth.auth.currentUser.uid;
    console.log(this.userid);
    this.profile= this.afs.doc(`users/${this.userid}`).valueChanges();
    this.details= this.afs.collection('Details', ref=> ref.where('register','==',true)).valueChanges();
  }
  ngAfterViewInit(){

  }

}
