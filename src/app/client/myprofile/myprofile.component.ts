import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {FormBuilder, FormGroup, Validators,FormControl,NgForm} from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import {ClientService} from '../../service/client.service';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  firstFormGroup: FormGroup;
  profile:any;
  userid:any;
  details:any;
  empty:any;
  item: any;
  state:any;
  city:any;
  Count;
  constructor(private cli: ClientService, private afAuth : AngularFireAuth,private afs: AngularFirestore, private db:AngularFireDatabase) { }

  ngOnInit() {
   
    this.firstFormGroup=new FormGroup({
     
      country:new FormControl('', [Validators.required]),
      state:new FormControl('',[Validators.required]),
      city:new FormControl('',[Validators.required]),
    
    });
    this.cli.bscountry.subscribe(country=> this.Count=country);
    this.item = this.db.list('/DB').valueChanges();
    
  }
  country(a){
    this.state = this.db.object(`/DB/${a}/states`).valueChanges();
  this.Count=a;
  this.cli.updatecountry(this.Count);
  }
  states(a){  
   
   const b=this.Count;
   
    
   this.city = this.db.object(`/DB/${b}/city/${a}`).valueChanges();

  }

  ngAfterViewInit(){

  }


}
