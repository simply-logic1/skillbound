import { Component, OnInit } from '@angular/core';
import {AngularFirestore,  AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {ClientService} from '../../service/client.service';

import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-about-m',
  templateUrl: './about-m.component.html',
  styleUrls: ['./about-m.component.css']
})
export class AboutMComponent implements OnInit {
  userid:any;
  details:any;
  country;
  countryv;
  statev;
  cityv;
  countrys;
  state;
  statess;
  city;
  cityss;
  skill;
skillsu;
level;
tlevel;
tlist;
date;
date1;
skills:any;
subcategory;
subcate;
skills1:any;
subcategory1;
subcate1;
skill1;
skillsu1;
tlist1;
issubcategory:boolean;
issubcategory1:boolean;
issubcategoryw:boolean;
issubcategoryw1:boolean;
subcateg;

toppingList :string[]=[
  'Swap','Partner with','Start a group','Swap and train','Teach','Tutor','Be employed in','Consult','Offer a good service'
];

 levels:string[]=[
   'Basic','Good','Expert'
 ];

  constructor(private cli: ClientService, private db:  AngularFireDatabase,  private afs:AngularFirestore,private afAuth:AngularFireAuth) { }

  ngOnInit() {
    this.userid = this.afAuth.auth.currentUser.uid;
    this.details= this.afs.collection('Details', ref=> ref.where('register','==',true).where('uid','==',this.userid)).valueChanges();
    this.cli.bscountry.subscribe(country=> this.countryv=country);
    this.cli.bsstate.subscribe(state=> this.statev=state);
    this.cli.bscity.subscribe(city=> this.cityv=city);
    this.country= this.db.list('/Data').valueChanges();
    this.cli.bssubcategory.subscribe(subcategory=>this.subcateg=subcategory )

  }
  editcontact(a,b,c){
    console.log(a,b,c);
    
    this.countrys=a;
    this.statess=b;
    this.cityss=c;
    document.getElementById("c1").style.display = "none";
  document.getElementById("c2").style.display = "none";
  document.getElementById("c3").style.display = "none";
  document.getElementById("c4").style.display = "none";
  document.getElementById("c5").style.display = "none";
  document.getElementById("c6").style.display = "block";
  document.getElementById("c7").style.display = "block";
  document.getElementById("c8").style.display = "block";
  document.getElementById("c9").style.display = "block";
  document.getElementById("c10").style.display = "block";
  
  }
  updatestate(a){
    console.log(a);
    this.countryv=a;
    this.cli.updatecountry(this.countryv);
    this.state = this.db.object(`/Data/${a}/states`).valueChanges();
  }
  updatecity(a){
    console.log(a);
    const b=this.countryv;
    console.log(b);
    this.statev=a;
    this.cli.updatestate(this.statev);
    this.city = this.db.object(`/Data/${b}/city/${a}`).valueChanges();
  }
   updatecity1(a){
    console.log(a);
    this.cityv=a;
    this.cli.updatecity(this.cityv);
   }
  updatecontact(a,b,f){
    console.log(a,b)
    const c= this.countryv;
    const d= this.statev;
    const e= this.cityv;
    document.getElementById("c1").style.display = "block";
  document.getElementById("c2").style.display = "block";
  document.getElementById("c3").style.display = "block";
  document.getElementById("c4").style.display = "block";
  document.getElementById("c5").style.display = "block";
  document.getElementById("c6").style.display = "none";
  document.getElementById("c7").style.display = "none";
  document.getElementById("c8").style.display = "none";
  document.getElementById("c9").style.display = "none";
  document.getElementById("c10").style.display = "none";
  const db = this.afs.doc(`Details/${f}`)
  const details = {
   Phonenumber: a,
   Country: c,
   State: d,
   City: e,
   Zip: b,

}
return db.update(details);
  }


  editschool(){
    document.getElementById("s11").style.display = "none";
    document.getElementById("s21").style.display = "block";
  }
  updateschool(a,b){
    console.log(a,b);
    document.getElementById("s11").style.display = "block";
    document.getElementById("s21").style.display = "none";

const db = this.afs.doc(`Details/${b}`)
const details = {
 Schools: a

}
return db.update(details);

  }
  editdetails(){
    document.getElementById("p1").style.display = "none";
  document.getElementById("p2").style.display = "block";
  document.getElementById("p3").style.display = "none";
  document.getElementById("p4").style.display = "block";
  document.getElementById("p5").style.display = "none";
  document.getElementById("p6").style.display = "block";

  }
  updatedetails(a,b,c,d){
    document.getElementById("p1").style.display = "block";
  document.getElementById("p2").style.display = "none";
  document.getElementById("p3").style.display = "block";
  document.getElementById("p4").style.display = "none";
  document.getElementById("p5").style.display = "block";
  document.getElementById("p6").style.display = "none";
  const db = this.afs.doc(`Details/${d}`)
    const details = {
     
      
      Work: a,
      Company: b,
      Experiences: c,
     

  }
  return db.update(details);
  }
  editskill(a,b,c,d,e){
    document.getElementById("s1").style.display = "none";
    document.getElementById("s2").style.display = "block";
    document.getElementById("s3").style.display = "none";
    document.getElementById("s4").style.display = "block";
    document.getElementById("s5").style.display = "none";
    document.getElementById("s6").style.display = "block";
    document.getElementById("s7").style.display = "none";
    document.getElementById("s8").style.display = "block";
    document.getElementById("s9").style.display = "none";
    document.getElementById("s10").style.display = "block";
    
    this.issubcategory=true;
    this.issubcategory1=false;
    this.skill=a;
    this.skillsu=b;
    this.level=c;
    this.tlevel=d;
    this.tlist=e;
    console.log(a,b,c,d,e)
    this.skills=this.db.list('/Category').valueChanges();
   this.subcategory=this.db.list(`/Sub_Category/${a}/${a}`).valueChanges();
  }
  updateskill(a,b,c,d,e){
  
    console.log(a,b,c,d,e)
    const g= this.subcateg;
    console.log(g)
    document.getElementById("s1").style.display = "block";
    document.getElementById("s2").style.display = "none";
    document.getElementById("s3").style.display = "block";
    document.getElementById("s4").style.display = "none";
    document.getElementById("s5").style.display = "block";
    document.getElementById("s6").style.display = "none";
    document.getElementById("s7").style.display = "block";
    document.getElementById("s8").style.display = "none";
    document.getElementById("s9").style.display = "block";
    document.getElementById("s10").style.display = "none";

    const db = this.afs.doc(`Details/${e}`)
    const details = {
     
      Skill: a,
      Subcategory: g,
      level: b,
      TeachingLevel: c,
      toppingList: d
  
  }
  return db.update(details);
  
  }
  skillcate(a){
    console.log(a);
    this.subcateg=a;
    this.cli.updatesubcategory(this.subcateg);
  }
  skillsub(a){
    console.log(a)
    this.issubcategory=false;
    this.issubcategory1=true;
    this.subcate= this.db.list(`/Sub_Category/${a}/${a}`).valueChanges();
  }
  editskillw(a,b,c){
    document.getElementById("sw1").style.display = "none";
    document.getElementById("sw2").style.display = "block";
    document.getElementById("sw3").style.display = "none";
    document.getElementById("sw4").style.display = "block";
    document.getElementById("sw5").style.display = "none";
    document.getElementById("sw6").style.display = "block";
    
    this.issubcategoryw=true;
    this.issubcategoryw1=false;
    this.skill1=a;
    this.skillsu1=b;
    this.tlist1=c;
    console.log(a,b,c)
    this.skills1=this.db.list('/Category').valueChanges();
   this.subcategory1=this.db.list(`/Sub_Category/${a}/${a}`).valueChanges();
  }
  updateskillw(a,b,c){
    console.log(a,b,c)
    const d=this.subcateg;
    console.log(d);
    document.getElementById("sw1").style.display = "block";
    document.getElementById("sw2").style.display = "none";
    document.getElementById("sw3").style.display = "block";
    document.getElementById("sw4").style.display = "none";
    document.getElementById("sw5").style.display = "block";
    document.getElementById("sw6").style.display = "none";
    
  
    const db = this.afs.doc(`Details/${c}`)
    const details = {
     
      Skillw: a,
      Subcategoryw: d,
      toppingListw: b
  
  }
  return db.update(details);
  
  }
  skillsub1(a){
    console.log(a)
    this.issubcategoryw=false;
    this.issubcategoryw1=true;
    this.subcate1= this.db.list(`/Sub_Category/${a}/${a}`).valueChanges();
  }
  
}
