import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { SharedDataService } from 'src/app/services/sharedData.service';


export interface tournament_table {

  ages: string;
  city: string;
  court_surface: string;
  id: number;
  participants: string;
  prize: string;
  registration_fee: string;
  stadium: string;
  start_date: string;
  title: string;
}

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TournamentComponent implements OnInit {



  dataSource: any;
 
  loading: boolean = false;
  columnsToDisplay = ['registration_fee','participant_ct', 'city',
   'court_surface', 'start_date', 'title', 'id'];
  expandedElement: tournament_table | null;

  constructor(private api: ApiService,private sharedData: SharedDataService) { 

    this.api.get_tournament().subscribe(data =>{
      this.dataSource = data;
     
    });
    this.loading = true;
  }

  ngOnInit(): void {
    
  }


}
