import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() SideNavigationToggle = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
onToggleOpenSidenav() {
  this.SideNavigationToggle.emit();
}
}