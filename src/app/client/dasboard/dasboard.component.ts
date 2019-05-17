import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl,NgForm} from '@angular/forms';
import {AngularFirestore,  AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import { contact, personal, education,skillhave, skillwant} from '../../service/user';

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
  state:string[];
  city:string[];
  subcategory:string[];
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
    'United States','United Kingdom'
  ];

skills:string[]=[
  'WebDesign','Construction','Chartism','Designing','Engineering Software'
];
// subcategory:string[]=[
//   'HTML','XTML','Javascript'
// ]; 
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
    this.firstFormGroup=new FormGroup({
      gender:new FormControl('',[Validators.required]),
      dateofbirth: new FormControl('',[Validators.required])
    });
    
    this.secondFormGroup=new FormGroup({
      country:new FormControl('', [Validators.required]),
      state:new FormControl('',[Validators.required]),
      city:new FormControl('',[Validators.required]),
      zipcode:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(5)])
    });
    this.thirdFormGroup = new FormGroup({
     qualify:new FormControl('',[Validators.required]),
     school:new FormControl('',[Validators.required]),
     Licenses:new FormControl('',Validators.required)
    });
    this.fourthFormGroup = new FormGroup({
      category:new FormControl('',[Validators.required]), 
      nbus: new FormControl ('',[Validators.required]),
      work: new FormControl ('',[Validators.required]),
      company: new FormControl ('',[Validators.required]),
      exp:new FormControl ('',[Validators.required]),
      rates:new FormControl('',[Validators.required])

    });
    this.fivethFormGroup = new FormGroup({ 
      skilly: new FormControl('',[Validators.required]),
      subcategoryy:new FormControl('',[Validators.required]),
      levely: new FormControl('',[Validators.required]),
      tlevely: new FormControl('',[Validators.required]),
      listy: new FormControl('',[Validators.required])
     
    });
    this.sixthFormGroup = new FormGroup({
      skillw: new FormControl('',[Validators.required]),
      subcategoryw: new FormControl('',[Validators.required]),
      listw: new FormControl('',[Validators.required]),
      termsFormControl:new FormControl('', [(control) => {    
        return !control.value ? { 'required': true } : null;
      }])
    
    
    });
    // termsFormControl = new FormControl('', [(control) => {    
    //   return !control.value ? { 'required': true } : null;
    // }]
   
  
//<!---name get--->    
this.userid=this.afAuth.auth.currentUser.uid
console.log(this.userid);
this.name= this.afs.collection('push' , ref => ref.where('uid','==', this.userid)).valueChanges();
//
  }
 //<--validate--> 
  public hasErrorp = (controlName: string, errorName: string) =>{
    return this.firstFormGroup.controls[controlName].hasError(errorName);
  }
  public perinfo = (firstFormGroupValue) => {
    if (this.firstFormGroup.valid) {
      this.inforp(firstFormGroupValue);
    }
  }
  private inforp = (firstFormGroupValue) => {
    let std: personal = {
      dateofbirth: firstFormGroupValue.dateOfbirth,
     gender: firstFormGroupValue.gender
    }
  }
  public hasErrorc = (controlName: string, errorName: string) =>{
    return this.secondFormGroup.controls[controlName].hasError(errorName);
   
  }
  public continfo = (secondFormGroupValue) => {
    if (this.secondFormGroup.valid) {
      this.inforc(secondFormGroupValue);
    }
  }
  private inforc = (secondFormGroupValue) => {
    let std: contact = {
     country:secondFormGroupValue.country,
      state :secondFormGroupValue.state,
      city:secondFormGroupValue.city,
    zipcode:secondFormGroupValue.zipcode
    }
  }
  public hasErrore =(controlName :string,errorName:string) => {
    return this.thirdFormGroup.controls[controlName].hasError(errorName);
  }
  public eduinfo=(thirdFormGroupValue) => {
    if(this.thirdFormGroup.valid){
      this.infoe(thirdFormGroupValue)
    }
  }
  private infoe = (thirdFormGroupValue) =>{
    let std:education ={
      qualify:thirdFormGroupValue.qualify,
      school:thirdFormGroupValue.school,
      Licenses:thirdFormGroupValue.Licenses
    }
  }
  public hasErrorpr =(controlName :string,errorName:string) => {
    return this.fourthFormGroup.controls[controlName].hasError(errorName);
  }
  // public proinfo=(fourthFormGroupValue) => {
  //   if(this.fourthFormGroup.valid){
  //     this.infopr(fourthFormGroupValue)
  //   }
  // }
  // private infopr = (fourthFormGroupValue) =>{
  //   let std:professional ={
  //     category:fourthFormGroupValue.category,
  //     nbus:fourthFormGroupValue.nbus,
  //     work:fourthFormGroupValue.work,
  //     company:fourthFormGroupValue.company,
  //     exp:fourthFormGroupValue.exp,
  //     rates:fourthFormGroupValue.rates
  //   }
  // }
  public hasErrorsh =(controlName :string,errorName:string) => {
    return this.fivethFormGroup.controls[controlName].hasError(errorName);
  }
  public skillha=(fivethFormGroupValue) => {
    if(this.fivethFormGroup.valid){
      this.infosh(fivethFormGroupValue)
    }
  }
  private infosh = (fivethFormGroupValue) =>{
    let std: skillhave={
      skilly:fivethFormGroupValue. skilly,
      subcategoryy:fivethFormGroupValue.subcategory,
      levely:fivethFormGroupValue.levely,
      tlevely:fivethFormGroupValue.tlevely,
      listy:fivethFormGroupValue.listy
    }
  }
  public hasErrorsw =(controlName :string,errorName:string) => {
    return this.sixthFormGroup.controls[controlName].hasError(errorName);
  }
  public skillwa=(sixthFormGroupValue) => {
    if(this.sixthFormGroup.valid){
      this.infosw(sixthFormGroupValue)
    }
  }
  private infosw = (sixthFormGroupValue) =>{
    let std:skillwant ={
     skillw:sixthFormGroupValue.skillw,
     subcategoryw:sixthFormGroupValue.subcategoryw,
     listw:sixthFormGroupValue.listw,
    }
  }
  onSubmit() {
    this.sixthFormGroup.get('termsFormControl ').markAsDirty();
  }
  //
  countryus(a){
    console.log(a);
    if(a == 'United States'){
   this.state=[
       'California','Arizona','Georgia','Florida','Texas'
     ]
    }
    else{
     this.state=[
       'Antrim','Avon','Borders', 'Central', 'Cumbria'
     ]
    }
  }
  stateus(a){
   console.log(a);
   if(a == 'California'){
  this.city=[
      'California City','Los Angeles','San Diego','San Francisco','Fresno'
    ]
   }
   else if(a == 'Arizona'){
    this.city=[
      'Phoenix','Tucson','Scottsdale', 'Tempe', 'Mesa'
    ]
   }
   else if(a == 'Georgia'){
     this.city=[
       'Atlanta','Columbus','Savannah', 'Athens', 'Sandy Springs'
     ]
    }
    else if(a == 'Florida'){
      this.city=[
    'Miami','Tampa','Orlando', 'Jacksonville', 'Winter Haven'
    ]
   }
   else if(a == 'Texas'){
    this.city=[
      'Fredericksburg','Jefferson','Wimberley', 'Canyon', 'Port Isabel'
    ]
   }
   else if(a == 'Antrim'){
    this.city=[
      'Antrim','Ballymena','Ballymoney', 'Belfast', 'Crumlin'
    ]
   }
   else if(a == 'Avon'){
    this.city=[
      'Avonmouth','Banwell','Clevedon', 'Bristol', 'Yate'
    ]
   }
   else if(a == 'Borders'){
    this.city=[
      'Berwick Upon Tweed','Cockburnspath','Duns', 'Eyemouth', 'Galashiels'
    ]
   }
   else if(a == 'Central'){
    this.city=[
      'Alloa','Bonnybridge','Denny', 'Falkirk', 'Grangemouth'
    ]
   }
   else if(a == 'Cumbria'){
    this.city=[
      'Annaside','Appleby','Barrow In Furness', 'Beckermet', 'Carlisle'
    ]
   }
 }
 skilladd(c){
   console.log(c);
   if(c =='WebDesign'){
     this.subcategory=[
       'HTML','CSS','Javascript'
     ]
   }
   else if(c =='Construction'){
     this.subcategory=[
       'Floor','DIY','Roofs','Construction Safety'
     ]
   }
   else if(c =='Chartism'){ 
     this.subcategory=[
       'De Mark','Market Profile','Moving Averages'
     ]
   }
   else if(c =='Designing'){
  this.subcategory=[
    'Clothing','costume Design','Textile Design'
  ]
   }
   else if(c =='Engineering Software'){
    this.subcategory=[
      'Auto CAD','Home Design','STAAD Pro'
    ]
   }
 }


 personal(a, b){
  
console.log(a,b);
  const db = this.afs.doc(`Details/${b}`)
    const details = {
      Username: b,
     Birthdate: a.dateofbirth,
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
     Zip: a.zipcode,

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
  skillwant(a,b,c,d1,e){
    const db = this.afs.doc(`Details/${b}`)
    const d= new Date();
    const details = {
     
      Skillw: a.skillw,
      Subcategoryw: a.subcategoryw,
      toppingListw: a.listw,
      register: true,
      Join:d,
      uid:e
  }
  this.userid=this.afAuth.auth.currentUser.uid
  const db1 = this.afs.doc(`users/${this.userid}`)
  const details1 = {
    displayName:b,
    email:c,
    PhotoURL:d1,
    uid:e,
    register: true,
  }
  const db2 = this.afs.doc(`push/${this.userid}`)
  const details2 = {
    
    register: true,
  }
  return db1.set(details1), db.update(details), db2.update(details2);
  }
}
  
  


 

 

