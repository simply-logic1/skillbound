import { Component, OnInit } from '@angular/core';
import {AngularFirestore,  AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {ClientService} from '../../service/client.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  
})
export class SkillsComponent implements OnInit {
userid:any;
details:any;
city:any;
selected;
gender;
fb;
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
images;
downloadurl: Observable<string>;
  uploadPercent:Observable<number>;
  uploads: any[];
  progressBarValue;

  allPercentage: Observable<any>;
  files: Observable<any>;
toppingList :string[]=[
  'Swap','Partner with','Start a group','Swap and train','Teach','Tutor','Be employed in','Consult','Offer a good service'
];

 levels:string[]=[
   'Basic','Good','Expert'
 ];
  constructor(public storage: AngularFireStorage, private cli: ClientService, private db:  AngularFireDatabase,  private afs:AngularFirestore,private afAuth:AngularFireAuth) { }

  ngOnInit() {
    this.userid = this.afAuth.auth.currentUser.uid;
    this.details= this.afs.collection('Details', ref=> ref.where('register','==',true).where('uid','==',this.userid)).valueChanges();
    this.cli.bssubcategory.subscribe(subcategory=>this.subcateg=subcategory )
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
 editpe(){
  document.getElementById("p1").style.display = "none";
  document.getElementById("p2").style.display = "block";
  document.getElementById("e1").style.display = "none";
  document.getElementById("e2").style.display = "block";
 }
 updatephone1(a,b){
  console.log(a,b);
  document.getElementById("p1").style.display = "block";
  document.getElementById("p2").style.display = "none";

const db = this.afs.doc(`Details/${b}`)
const details = {
Phonenumber: a

}
return db.update(details);

}
updateemail(a,b){
  console.log(a,b);
  document.getElementById("e1").style.display = "block";
  document.getElementById("e2").style.display = "none";

const db = this.afs.doc(`Details/${b}`)
const details = {
Email: a

}
return db.update(details);

}
editwc(){
  document.getElementById("work").style.display = "none";
  document.getElementById("company").style.display = "none";
  document.getElementById("w").style.display = "none";
  document.getElementById("w1").style.display = "none";
  document.getElementById("work1").style.display = "block";
  

}
updatework1(a,b,c){
  document.getElementById("work").style.display = "block";
  document.getElementById("company").style.display = "block";
  document.getElementById("w").style.display = "block";
  document.getElementById("w1").style.display = "block";
  document.getElementById("work1").style.display = "none";
  const db = this.afs.doc(`Details/${c}`)
const details = {
 Work: a,
 Company:b

}
return db.update(details);
}

editnumber(){
  document.getElementById("number1").style.display = "none";
  document.getElementById("number2").style.display = "block";

}

updateschool1(a,b){
  console.log(a,b);
  document.getElementById("number1").style.display = "block";
  document.getElementById("number2").style.display = "none";

const db = this.afs.doc(`Details/${b}`)
const details = {
Schools: a

}
return db.update(details);

}
editskillh(a,b,c,d,e){
  document.getElementById("s1").style.display = "none";
  document.getElementById("s2").style.display = "none";
  document.getElementById("s3").style.display = "none";
  document.getElementById("s4").style.display = "none";
  document.getElementById("s5").style.display = "none";
  document.getElementById("sh1").style.display = "none";
  document.getElementById("sh2").style.display = "none";
  document.getElementById("sh3").style.display = "none";
  document.getElementById("sh4").style.display = "none";
  document.getElementById("sh5").style.display = "none";
  document.getElementById("s6").style.display = "block";
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
updateskillh(a,b,c,d,e){
  
  console.log(a,b,c,d,e)
  const g= this.subcateg;
  console.log(g)
  document.getElementById("sh1").style.display = "-webkit-box";
  document.getElementById("s1").style.display = "block";
  document.getElementById("sh2").style.display = "-webkit-box";
  document.getElementById("s2").style.display = "block";
  document.getElementById("sh3").style.display = "-webkit-box";
  document.getElementById("s3").style.display = "block";
  document.getElementById("sh4").style.display = "-webkit-box";
  document.getElementById("s4").style.display = "block";
  document.getElementById("sh5").style.display = "-webkit-box";
  document.getElementById("s5").style.display = "block";

  document.getElementById("s6").style.display = "none";
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
  document.getElementById("sw2").style.display = "none";
  document.getElementById("sw3").style.display = "none";
  document.getElementById("sf1").style.display = "none";
  document.getElementById("sf2").style.display = "none";
  document.getElementById("sf3").style.display = "none";
  document.getElementById("sw4").style.display = "block";
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
  document.getElementById("sw1").style.display = "-webkit-box";
  document.getElementById("sf1").style.display = "block";
  document.getElementById("sw2").style.display = "-webkit-box";
  document.getElementById("sf2").style.display = "block";
  document.getElementById("sw3").style.display = "-webkit-box";
  document.getElementById("sf3").style.display = "block";
  document.getElementById("sw4").style.display = "none";

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
image(){
  this.images=this.afs.collection('SingleImage').valueChanges();

}
profile(a,b){
  console.log(a,b); const db = this.afs.doc(`Details/${b}`)
 const details = {
  PhotoURL:a

 }
return db.update(details);


}
singleimageupload(event:any,b){
  
 
  console.log(this.userid);
    const date=new Date();
  var urlarray=[];
  var namearray=[];
     const fulldate=date.getFullYear()+'/'+(date.getMonth()+1);
    const filelist = event.target.files;
    for (const file of filelist) {
    const filePath = this.userid+'/'+'Single'+'/'+fulldate+'/'+file.name;
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
        
           this.afs.doc(`Details/${b}`).update({
            PhotoURL:urlarray,
           
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
