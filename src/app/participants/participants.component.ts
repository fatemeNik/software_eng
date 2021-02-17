import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { ApiService } from '../services/api.service';
import { SharedDataService } from '../services/sharedData.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {
  
  participant:any;
 
  condition:boolean=false;

  constructor(private api:ApiService,private sharedData:SharedDataService) { 

    this.api.get_participant(this.sharedData.tournament_id.value).subscribe(data =>{   
      this.participant = data;  })
  }

  ngOnInit(): void {
  }

  // get_participant(){

  //   this.api.get_participant(this.sharedData.tournament_id.value).subscribe(data =>{   
  //     this.participant = data;  
  //     console.log(this.sharedData.tournament_id.value);
  //     console.log(data);
    
  //  }); 
  
  // }
  
}