import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl,NgForm} from '@angular/forms';
import {AngularFirestore,  AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import { contact, personal, education,skillhave, skillwant} from '../../service/user';
import { AngularFireDatabase } from '@angular/fire/database';
import {ClientService} from '../../service/client.service';
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
  state:any;
  city:any;
  Count;

  subcategory:any;
  firstFormGroup: FormGroup;
  secondFormGroup:FormGroup;
  thirdFormGroup:FormGroup;
  fourthFormGroup:FormGroup;
  fivethFormGroup:FormGroup;
  sixthFormGroup:FormGroup;
  isNameSelected: boolean; 
  isName:boolean;
  item:any;
  skills:any;
  gender : string[]=[
    'Male','Female','Others'
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
  
  constructor(private cli: ClientService, private db:AngularFireDatabase, private _formBuilder: FormBuilder,private afs:AngularFirestore,private afAuth:AngularFireAuth ) {
   
  }
  
  ngOnInit() {
    this.firstFormGroup=new FormGroup({
      gender:new FormControl('',[Validators.required]),
      dateofbirth: new FormControl('',[Validators.required])
    });
    
    this.secondFormGroup=new FormGroup({
      phone:new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
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
    
   
  
//<!---name get--->    
this.userid=this.afAuth.auth.currentUser.uid
console.log(this.userid);
this.item = this.db.list('/Data').valueChanges();
this.cli.bscountry.subscribe(country=> this.Count=country);
this.name= this.afs.collection('push' , ref => ref.where('uid','==', this.userid)).valueChanges();
this.skills=this.db.list('/Category').valueChanges();
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
    this.state = this.db.object(`/Data/${a}/states`).valueChanges();
    this.Count=a;
    this.cli.updatecountry(this.Count);
  }
  stateus(a){
    const b=this.Count;
   
    
   this.city = this.db.object(`/Data/${b}/city/${a}`).valueChanges();
 }
 skilladd(c){
   console.log(c);
   this.subcategory=this.db.list(`/Sub_Category/${c}/${c}`).valueChanges();
 }


 personal(a, b,c,d){
  
console.log(a,b,c,d);
  const db = this.afs.doc(`Details/${b}`)
    const details = {
      Email: c,
      PhotoURL: d,
      Username: b,
     Birthdate: a.dateofbirth,
     Gender: a.gender,
     

  }
  return db.set(details);

    
  }
  contact(a,b){
    const db = this.afs.doc(`Details/${b}`)
    const details = {
     Phonenumber: a.phone,
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