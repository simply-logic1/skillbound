import { Component, OnInit } from '@angular/core';
import {AngularFirestore,  AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
@Component({
  selector: 'app-editprofile-m',
  templateUrl: './editprofile-m.component.html',
  styleUrls: ['./editprofile-m.component.css']
})
export class EditprofileMComponent implements OnInit {
  userid:any;
  details:any;
  constructor(private afs:AngularFirestore,private afAuth:AngularFireAuth) { }

  ngOnInit() {
    this.userid = this.afAuth.auth.currentUser.uid;
    this.details= this.afs.collection('Details', ref=> ref.where('register','==',true).where('uid','==',this.userid)).valueChanges();
  }

}
