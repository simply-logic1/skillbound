import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-skillshave',
  templateUrl: './skillshave.component.html',
  styleUrls: ['./skillshave.component.css']
})
export class SkillshaveComponent implements OnInit {

  constructor(private elem:ElementRef) { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    var colors=['#1783c3','#ffca08','#2aa7e1','#f5881f','#00ada7','#f05826','#4eb856', '#f36236', '#4eb856', '#ec3146', '#ec3146', '#f469a4', '#d2dd27', '#8d5da7'];
    // you'll get your through 'elements' below code
    let elements = this.elem.nativeElement.querySelectorAll('.bga');
    for(var i=0; i<elements.length;i++)
  {
    elements[i].style.backgroundColor = colors[i%8];
    ;
  }
    console.log(elements.length);
}
}
