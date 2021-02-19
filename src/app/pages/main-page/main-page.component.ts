import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SharedDataService } from 'src/app/services/sharedData.service';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss'],
    
  })
  
  export class MainPageComponent implements OnInit {
      
    dataSource:any;

    constructor(private api: ApiService,private sharedData: SharedDataService) { 

       
          
      }
    

      ngOnInit(): void {}

      weather(city){
        this.api.weather(city).subscribe(data =>{
            this.dataSource = data;
            this.sharedData.city.next(data);
            console.log(data);
            
        })
      }
      
  }
  