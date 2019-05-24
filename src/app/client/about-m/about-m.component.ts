import { Component, OnInit } from '@angular/core';
import {AngularFirestore,  AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
@Component({
  selector: 'app-about-m',
  templateUrl: './about-m.component.html',
  styleUrls: ['./about-m.component.css']
})
export class AboutMComponent implements OnInit {
  userid:any;
  details:any;
  constructor(private afs:AngularFirestore,private afAuth:AngularFireAuth) { }

  ngOnInit() {
    this.userid = this.afAuth.auth.currentUser.uid;
    this.details= this.afs.collection('Details', ref=> ref.where('register','==',true).where('uid','==',this.userid)).valueChanges();

  }

}
