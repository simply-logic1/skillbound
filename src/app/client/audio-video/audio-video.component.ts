import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-audio-video',
  templateUrl: './audio-video.component.html',
  styleUrls: ['./audio-video.component.css']
})
export class AudioVideoComponent implements OnInit {
  privacy :string[]=[
    'Only Me & My friends','Public'
  ];
  audio:string[]=[
    'My network friends','Everyone'
  ];
  downloadurl: Observable<string>;
  uploadPercent:Observable<number>;
  uploads: any[];
  progressBarValue;
  userid:any;
  allPercentage: Observable<any>;
  files: Observable<any>;
  constructor(private afAuth: AngularFireAuth,private afs: AngularFirestore, public storage: AngularFireStorage) { }

  ngOnInit() {
   this.userid=this.afAuth.auth.currentUser.uid

  }
  
  multipleimageupload(event:any){
   
   
console.log(this.userid);
    const date=new Date();
 var urlarray=[];
 var namearray=[];
     const fulldate=date.getFullYear()+'/'+(date.getMonth()+1);
    const filelist = event.target.files;
    for (const file of filelist) {
    const filePath = this.userid+'/'+'Multiple'+'/'+fulldate+'/'+file.name;
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
        
           this.afs.collection('MultipleImages').add({
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



 singleimageupload(event:any){
  
 
console.log(this.userid);
  const date=new Date();
var urlarray=[];
var namearray=[];
   const fulldate=date.getFullYear()+'/'+(date.getMonth()+1);
  const filelist = event.target.files[0];
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
audioupload(event:any){
  
 
  console.log(this.userid);
    const date=new Date();
  var urlarray=[];
  var namearray=[];
     const fulldate=date.getFullYear()+'/'+(date.getMonth()+1);
    const filelist = event.target.files[0];
    for (const file of filelist) {
    const filePath = this.userid+'/'+'Audio'+'/'+fulldate+'/'+file.name;
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
        
           this.afs.collection('Audio').add({
           url:urlarray,
           Audioname:namearray
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
  videoupload(event:any){
  
 
    console.log(this.userid);
      const date=new Date();
    var urlarray=[];
    var namearray=[];
       const fulldate=date.getFullYear()+'/'+(date.getMonth()+1);
      const filelist = event.target.files[0];
      for (const file of filelist) {
      const filePath = this.userid+'/'+'Video'+'/'+fulldate+'/'+file.name;
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
          
             this.afs.collection('Video').add({
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
