import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore,  AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable,of,BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { AngularFireStorage } from '@angular/fire/storage';

import { switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  displayName: string;
  name;
  email;
  phone;
  downloadurl: Observable<string>;
  uploadPercent:Observable<number>;
  uploads: any[];
  progressBarValue;
  userid:any;
  allPercentage: Observable<any>;
  files: Observable<any>;
  constructor(public storage: AngularFireStorage,private auth :AuthService,private router:Router,private afAuth:AngularFireAuth,private afs:AngularFirestore,
    private http:HttpClient) { }
    private country:string;
    private state:string;
    private city:string;
    private subcategory;
    public bscountry: BehaviorSubject<any> = new BehaviorSubject<any>(this.country);
    public bssubcategory: BehaviorSubject<any> = new BehaviorSubject<any>(this.subcategory);
    public bsstate: BehaviorSubject<any> = new BehaviorSubject<any>(this.state);
    public bscity: BehaviorSubject<any> = new BehaviorSubject<any>(this.city);
  clientlogin(email,pass){
    return this.auth.login(email, pass).catch(error => {

      throw error
    })   
  }
  adminlogin(email, pass) {
    // this.uid$ = this.afAuth.auth.currentUser.uid;
    // console.log(this.getuserdata(this.uid$)+"isis")
    return this.auth.adminlogin(email, pass).catch(error => {

      throw error
    })
  }
  //register
  register(registerForm){
    return this.auth.registerclient(registerForm)
  }
  
  public getJSON(): Observable<any> {
    return this.http.get ("../../assets/categories.json");
}
getUsername()
  {
    return this.afAuth.auth.currentUser.displayName;
  } 
  setcountry(country): void {
    this.country =country;
    this.bscountry.next(this.country);
    console.log(this.country);
  
  }
  updatecountry(country)
{
  this.setcountry(country)
} 
setstate(state): void {
  this.state =state;
  this.bsstate.next(this.state);
  console.log(this.state);

}
updatestate(state)
{
this.setstate(state)
}
setcity(city): void {
  this.city =city;
  this.bscity.next(this.city);
  console.log(this.city);

}
updatecity(city)
{
this.setcity(city)
}
setsubcategory(subcategory): void {
  this.subcategory =subcategory;
  this.subcategory.next(this.subcategory);
  console.log(this.subcategory);

}
updatesubcategory(subcategory)
{
this.setcountry(subcategory)
}



//profileimage



profile(event:any){
  
 
  console.log(this.userid);
    const date=new Date();
  var urlarray=[];
  var namearray=[];
     const fulldate=date.getFullYear()+'/'+(date.getMonth()+1);
    const filelist = event.target.files[0];
    for (const file of filelist) {
    const filePath = 'Profile-image'+'/'+this.userid+'/'+fulldate+'/'+file.name;
    this.uploadPercent = this.storage.upload(filePath, file).percentageChanges();
    const task = this.storage.upload(filePath, file).then(()=>{
      const fileRef = this.storage.ref(filePath);
     
    
      const getDownloadURLl=fileRef.getDownloadURL().subscribe(url=>
      {
        const URL=url;
       
        urlarray.push(url);
        namearray.push(file.name);
        console.log(namearray)
          console.log(urlarray);
         console.log(file.name)
        
           this.afs.collection('SingleImage').add({
           url:urlarray,
           imagename:namearray
     })
    
  
  
   
  
  
         
       
     })
     
  
   }
  
  )
  const uploadTask=this.storage.upload(filePath, file);
  uploadTask.percentageChanges().subscribe((value) => {
   this.progressBarValue = value.toFixed(2);
  })
  
  }
  
  }

  //background

  background(event:any){
  
 
    console.log(this.userid);
      const date=new Date();
    var urlarray=[];
    var namearray=[];
       const fulldate=date.getFullYear()+'/'+(date.getMonth()+1);
      const filelist = event.target.files[0];
      for (const file of filelist) {
      const filePath = 'Background-image'+'/'+this.userid+'/'+fulldate+'/'+file.name;
      this.uploadPercent = this.storage.upload(filePath, file).percentageChanges();
      const task = this.storage.upload(filePath, file).then(()=>{
        const fileRef = this.storage.ref(filePath);
       
      
        const getDownloadURLl=fileRef.getDownloadURL().subscribe(url=>
        {
          const URL=url;
         
          urlarray.push(url);
          namearray.push(file.name);
          console.log(namearray)
            console.log(urlarray);
           console.log(file.name)
          
             this.afs.collection('SingleImage').add({
             url:urlarray,
             imagename:namearray
       })
      
    
    
     
    
    
           
         
       })
       
    
     }
    
    )
    const uploadTask=this.storage.upload(filePath, file);
    uploadTask.percentageChanges().subscribe((value) => {
     this.progressBarValue = value.toFixed(2);
    })
    
    }
    
    }

}
