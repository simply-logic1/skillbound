import { Component, OnInit, ElementRef  } from '@angular/core';
import { skillshave } from '../../service/user';
import { ClientService } from '../../service/client.service';



@Component({
  selector: 'app-skillshave',
  templateUrl: './skillshave.component.html',
  styleUrls: ['./skillshave.component.css']
})
export class SkillshaveComponent implements OnInit {
  skillshaves:skillshave[];
  // url='assets/sub_cat.json'

  constructor(private clientservice:ClientService) { }
  // getcategories(){
  //   return this.http.get('assets/sub_cat.json');
  // }
 

  ngOnInit() {
    return this.clientservice.getJSON().subscribe(data => this.skillshaves=data)
  }

}
