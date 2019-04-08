import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css'],
  providers: []
  
})
export class DasboardComponent implements OnInit {
 
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup:FormGroup;
  fourthFormGroup:FormGroup;
  gender : string[]=[
    'Male','Female','Other'
  ];
  country :string[]=[
    'india','Australia','china'
  ];
  state:string[]=[
    'Tamilnadu','kerala','karataka'
  ];
  city: string[]=[
    'chennai','coimbatore','Trichy'
  ];
  options: FormGroup;
  constructor(private _formBuilder: FormBuilder) {
   
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
    
  }
 
}

