import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularFirestore,  AngularFirestoreDocument} from '@angular/fire/firestore';
export interface User{
  name:any;
  id: string;
}
@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css'],
  providers: []
  
})
export class DasboardComponent implements OnInit {
  isNameSelected: boolean; 
  isName:boolean;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup:FormGroup;
  fourthFormGroup:FormGroup;
  fifthFormGroup:FormGroup;
  country:any;
  gender : string[]=[
    'Male','Female','Other'
  ];
  select : string[]=[
    'Company','individual'
  ];
  
 
  state:string[]=[
    'Tamilnadu','kerala','karataka'
  ];
  city: string[]=[
    'chennai','coimbatore','Trichy'
  ];
  options: FormGroup;
  constructor(private _formBuilder: FormBuilder,private afs: AngularFirestore) {
   
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
    this.fifthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.country=this.afs.collection('country').snapshotChanges();
   
    
  }
  someMethod(event){
    if (event == "Company") {
    this.isNameSelected = true;
    this.isName = true;
  } else if(event == "individual"){
    this.isName = true;
    this.isNameSelected = false;
  }
    console.log('Some option selected', event);
  }
 getcity(a:any){
   console.log(a)

 }
}

