import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

export interface msg_table {

  first_name: string;
  last_name: string;
  partner: string;
}

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PlayerComponent implements OnInit {

  dataSource: any;
  loading: boolean = false;
  columnsToDisplay = ['partner', 'last_name', 'first_name'];
  expandedElement: msg_table | null;

  constructor(private api: ApiService) { 
    this.api.get_signup().subscribe(data =>{
      this.dataSource = data;
    });
    this.loading = true;
  }

  ngOnInit(): void {
  } 

}
