import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../services/api.service';

export interface coach {
 
  first_name: string;
  last_name: string;
  city: string;
  birthday: string;
  image:string;
  degree: string;
}

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.scss'],
  animations: [
      trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],

})


export class CoachComponent implements OnInit {

  columnsToDisplay = ['degree','city', 'last_name','first_name'];
  loading:boolean=false;
  expandedElement: coach | null;
  dataSource: any;
  
  

  constructor(private api:ApiService) { 

    this.api.get_coach_data().subscribe(data =>{
      this.dataSource = data;
      console.log(this.dataSource);
      
    });
    this.loading = true;

  }
  

  ngOnInit(): void {
  }

}
