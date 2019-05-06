import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularFirestore,  AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import { NgForm,NgModel } from '@angular/forms';
@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css'],
  providers: []
  
})
export class DasboardComponent implements OnInit {
  userid:any
  empty:any;
  name:any;
  firstFormGroup: FormGroup;
  secondFormGroup:FormGroup;
  thirdFormGroup:FormGroup;
  fourthFormGroup:FormGroup;
  fivethFormGroup:FormGroup;
  sixthFormGroup:FormGroup;
  isNameSelected: boolean; 
  isName:boolean;
  gender : string[]=[
    'Male','Female','Other'
  ];
  country:string[]=[
    'USA','UK'
  ];
 state:string[]=[
   'California','Floria','London','Cumbria'
 ];
city:string[]=[
  'Albion','Greenwood','Palmers Green','Millon'
]
skills:string[]=[
  'WebDesign','C Programming'
];
subcategory:string[]=[
  'HTML','XTML','Javascript'
]; 
  select : string[]=[
    'Company','Individual'
  ];
 toppingList :string[]=[
   'Swap','Partner with','Start a group','Swap and train','Teach','Tutor','Be employed in','Consult','Offer a good service'
 ];
 toppingList1 :string[]=[
  'Swap','Partner with someone','Form a group','Swap and train','Tutor','Employe','Hire to consult','Offer a good service'
];
  level:string[]=[
    'Basic','Good','Expert'
  ];
  someMethod(event){
    if (event == "Company") {
    this.isNameSelected = true;
    this.isName = true;
  } else if(event == "Individual"){
    this.isName = true;
    this.isNameSelected = false;
  }
    console.log('Some option selected', event);
  }
  constructor(private _formBuilder: FormBuilder,private afs:AngularFirestore,private afAuth:AngularFireAuth ) {
   
  }
 
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      uname: ['', Validators.required],
      name: ['', Validators.required],
      date: ['', Validators.required],
      gender:  ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      country: ['', Validators.required],
      state : ['', Validators.required],
      city : ['', Validators.required],
      zip : ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      qualify: ['', Validators.required],
      school: ['', Validators.required],
      Licenses: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      category: ['', Validators.required],
      nbus: ['', Validators.required],
      work: ['', Validators.required],
      company: ['', Validators.required],
      exp: ['', Validators.required],
      rates: ['', Validators.required]
    });
    this.fivethFormGroup = this._formBuilder.group({
      skilly: ['', Validators.required],
      subcategoryy: ['', Validators.required],
      levely: ['', Validators.required],
      tlevely: ['', Validators.required],
      listy: ['', Validators.required],
     
    });
    this.sixthFormGroup = this._formBuilder.group({
      skillw: ['', Validators.required],
      subcategoryw: ['', Validators.required],
      listw: ['', Validators.required],
    });
this.userid=this.afAuth.auth.currentUser.uid
console.log(this.userid);
// this.name = 'some value';
this.name= this.afs.collection('users' , ref => ref.where('uid','==', this.userid)).valueChanges();
  }
 
 personal(a, b){
  

    const db = this.afs.doc(`Details/${b}`)
    const details = {
      Username: b,
     Birthdate: a.date,
     Gender: a.gender,

  }
  return db.set(details);
  }
  contact(a,b){
    const db = this.afs.doc(`Details/${b}`)
    const details = {
     
     Country: a.country,
     State: a.state,
     City: a.city,
     Zip: a.zip,

  }
  return db.update(details);

  }
  Education(a,b){
    const db = this.afs.doc(`Details/${b}`)
    const details = {
     
      Qualificaions: a.qualify,
     Schools: a.school,
     Licenses: a.Licenses

  }
  return db.update(details);

  }
  category(a,b){
    const db = this.afs.doc(`Details/${b}`)
    const details = {
     
      Category: a.category,
      business: a.nbus,
      Work: a.work,
      Company: a.company,
      Experiences: a.exp,
      Rates: a.rates

  }
  return db.update(details);
  }
  skillyou(a,b){
    const db = this.afs.doc(`Details/${b}`)
    const details = {
     
      Skill: a.skilly,
      Subcategory: a.subcategoryy,
      level: a.levely,
      TeachingLevel: a.tlevely,
      toppingList: a.listy

  }
  return db.update(details);
  }
  skillwant(a,b){
    const db = this.afs.doc(`Details/${b}`)
    const d= new Date();
    const details = {
     
      Skillw: a.skillw,
      Subcategoryw: a.subcategoryw,
      toppingListw: a.listw,
      register: true,
      Join:d
  }
  this.userid=this.afAuth.auth.currentUser.uid
  const db1 = this.afs.doc(`users/${this.userid}`)
  const details1 = {
    register: true,
  }

  return db1.update(details1), db.update(details);
  }
  

}

