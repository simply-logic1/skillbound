import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog, MatPaginator, MAT_SORT_HEADER_INTL_PROVIDER } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject} from 'rxjs';
  export interface Order {
    
    uid:any;
  displayName:any;
  email:any;
  phonenumber:any;
  applyFilter;
  }

@Component({
  selector: 'app-adminuser',
  templateUrl: './adminuser.component.html',
  styleUrls: ['./adminuser.component.css']
})
export class AdminuserComponent  {
  displayedColumns = ['uid','displayname','email','phone'];
  dataSource: MatTableDataSource<Order>; 
  visitingdate: BehaviorSubject<Date>;
  property:any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private afs: AngularFirestore, public dialog: MatDialog) {
    
  }

  ngOnInit() {
  }
  ngAfterViewInit() 
  {
  
    this.afs.collection<Order>('users').valueChanges().subscribe(data => {
      this.dataSource = new MatTableDataSource(data); 
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })

  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
    
  }

}