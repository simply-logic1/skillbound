import { Component, OnInit } from '@angular/core';
import {AngularFirestore,  AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import { NgForm,NgModel } from '@angular/forms';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as _moment from 'moment';
import { default as _rollupMoment} from 'moment';
import {FormControl} from '@angular/forms';

const moment = _rollupMoment || _moment;
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  providers: [
    
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class SkillsComponent implements OnInit {
userid:any;
details:any;
city:any;
selected;
date;
  constructor(private db:  AngularFireDatabase,  private afs:AngularFirestore,private afAuth:AngularFireAuth) { }

  ngOnInit() {
    this.userid = this.afAuth.auth.currentUser.uid;
    this.details= this.afs.collection('Details', ref=> ref.where('register','==',true).where('uid','==',this.userid)).valueChanges();
   
  }
  
  edit(){
    document.getElementById("name").style.display = "none";
    document.getElementById("inp").style.display = "block";
  }
  edit1(){
    document.getElementById("name1").style.display = "none";
    document.getElementById("inp1").style.display = "block";
  }
  edit2(){
    document.getElementById("name2").style.display = "none";
    document.getElementById("inp2").style.display = "block";
  }
  editcity(a,b,c){
    document.getElementById("cityname").style.display = "none";
    document.getElementById("cityedit").style.display = "block";
    this.selected=c;
    this.city = this.db.object(`/Data/${a}/city/${b}`).valueChanges();

  }
  editc(){
    document.getElementById("editch").style.display = "none";
    document.getElementById("editche").style.display = "none";
    document.getElementById("phone").style.display = "block";
    document.getElementById("email").style.display = "block";
    document.getElementById("sub").style.display = "block";
  }
  sdate(a){
    
    document.getElementById("change").style.display = "none";
    document.getElementById("change1").style.display = "block";
    var c = new Date(a);
    var d= c.getDate();
    var e= c.getMonth();
    var f = c.getFullYear();
    this.date = new FormControl(moment([f, e, d]));
      }
      datechange(a,b){
        const data= a.toDate();
        console.log(data)
        document.getElementById("change").style.display = "block";
    document.getElementById("change1").style.display = "none";
       
        console.log(a);
        const db = this.afs.doc(`Details/${b}`)
const details = {
 Birthdate: data

}
return db.update(details);
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
  updateschool(a,b){
    console.log(a,b);
    document.getElementById("name1").style.display = "block";
    document.getElementById("inp1").style.display = "none";

const db = this.afs.doc(`Details/${b}`)
const details = {
 Schools: a

}
return db.update(details);

  }
  updatephone(a,b){
    console.log(a,b);
    document.getElementById("name2").style.display = "block";
    document.getElementById("inp2").style.display = "none";

const db = this.afs.doc(`Details/${b}`)
const details = {
  Phonenumber: a

}
return db.update(details);

  }
  updatecity(a, b){
    document.getElementById("cityname").style.display = "block";
    document.getElementById("cityedit").style.display = "none";
    const db = this.afs.doc(`Details/${b}`)
    const details = {
      City: a
    
    }
    return db.update(details);
  }
  updatephone1(a,b,c){
    console.log(a,b,c);
//     document.getElementById("editch").style.display = "block";
//     document.getElementById("editche").style.display = "block";
//     document.getElementById("phone").style.display = "none";
//     document.getElementById("email").style.display = "none";
//     document.getElementById("sub").style.display = "none";

// const db = this.afs.doc(`Details/${c}`)
// const details = {
//   Phonenumber: a,
//   Email: b,
// }
// return db.update(details);

  }

}
