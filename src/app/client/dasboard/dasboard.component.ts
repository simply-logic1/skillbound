import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularFirestore,  AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';

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
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fivethFormGroup = this._formBuilder.group({
      fivethCtrl: ['', Validators.required]
    });
    this.sixthFormGroup = this._formBuilder.group({
      sixthCtrl: ['', Validators.required]
    });
// this.userid=this.afAuth.auth.currentUser.uid
// console.log(this.userid);
// this.name = 'some value';
// this.name= this.afs.collection('users').doc(this.userid).valueChanges();
  }
 
 
}

