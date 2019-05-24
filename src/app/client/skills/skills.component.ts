import { Component, OnInit } from '@angular/core';
import {AngularFirestore,  AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import { NgForm,NgModel } from '@angular/forms';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
userid:any;
details:any;
  constructor(private afs:AngularFirestore,private afAuth:AngularFireAuth) { }

  ngOnInit() {
    this.userid = this.afAuth.auth.currentUser.uid;
    this.details= this.afs.collection('Details', ref=> ref.where('register','==',true).where('uid','==',this.userid)).valueChanges();
   
  }
  edit(){
    document.getElementById("name").style.display = "none";
    document.getElementById("inp").style.display = "block";
  }
  updatework(a,b){
    console.log(a,b);
    document.getElementById("name").style.display = "block";
    document.getElementById("inp").style.display = "none";

const db = this.afs.doc(`Details/${b}`)
const details = {
 Work: a

}
return db.update(details);

  }

}
