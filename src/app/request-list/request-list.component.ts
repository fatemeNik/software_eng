import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../services/api.service';
import { SharedDataService } from '../services/sharedData.service';


export interface request_table {

  req_sender: string;
}

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  template :'<app-navabars [childNotif]=parentNotif ></app-navabars>',
  styleUrls: ['./request-list.component.scss']
})

export class RequestListComponent implements OnInit {

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;

    ELEMENT_DATA: request_table[] = [];
    // parentNotif:any;
    dataSource: any;
    displayedColumns: string[] = ['req_sender'];
    
  // expandedElement: request_table | null;
  // loading: boolean = false;

  constructor(private api: ApiService, public dialogRef: MatDialogRef<RequestListComponent>,
    public sharedData:SharedDataService) {

    this.api.request_list().subscribe(data =>{
      this.ELEMENT_DATA = <any>data;
      this.dataSource = new MatTableDataSource<request_table>(this.ELEMENT_DATA);
      this.sharedData.parentNotif.next(this.ELEMENT_DATA.length);
      this.dataSource = data;
      console.log(data);
      //console.log(this.sharedData.parentNotif.value);
      
      
    });
  //   this.loading = true;
  
    }

  ngOnInit(): void {
    
  }

  accept_request(id){

    console.log(id)
    this.api.accept_request(id).subscribe(res =>   
      {
        
        console.log(res);
        
      })
  }

  reject_request(id){
    
    console.log(id)
    this.api.reject_request(id).subscribe(res =>   
      {
    
        console.log(res);
        
      })
  }

}
