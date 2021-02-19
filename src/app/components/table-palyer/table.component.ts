import { Component, OnInit } from '@angular/core';
import { animate, style, transition, state, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';

export interface player_table {
  id: number;
  first_name: string;
  last_name: string;
  city: string;
  iripin: string;
  image: string;
}
 
// const ELEMENT_DATA: player_table[] = [];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class TableComponent implements OnInit {

  dataSource: any;
  loading: boolean = false;

  columnsToDisplay = ['iripin', 'city', 'last_name', 'first_name', 'id'];
  expandedElement: player_table | null;

  constructor(private api: ApiService) {

    this.api.get_player_data().subscribe(data => {
      let temp = [];
      for (let i = 0 ; i <= 9; i++){
        temp.push(data[i]);
      }
      this.dataSource = temp;
    });
    this.loading = true;
  }

  ngOnInit() {
  }

}