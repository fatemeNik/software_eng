import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SharedDataService } from 'src/app/services/sharedData.service';
import { SnackBarNotComponent } from '../snack-bar-not/snack-bar-not.component';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

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

  sentRequest:boolean = false;
  dataSource: any;
  loading: boolean = false;
  // partner:boolean = false;
  columnsToDisplay = ['partner', 'last_name', 'first_name'];
  expandedElement: msg_table | null;
  constructor(private api: ApiService, private auth: AuthenticationService,
     private sharedData: SharedDataService, private _snackBar: MatSnackBar) { 

    this.api.get_signup().subscribe(data =>{
      this.dataSource = data;
      console.log(this.dataSource);
      
    });
    this.loading = true;

  }

  


  ngOnInit(): void {
  } 


  request(iripin){
    console.log(iripin)
    this.api.request(iripin).subscribe(res =>   
      {
        // this.sharedData.to.next(res.this.columnsToDisplay[2]);
        console.log(res);
        this.sentRequest=true;
        this._snackBar.openFromComponent(SnackBarComponent,{
          duration:3000,
        });
        // if(partner == true){
        //   this._snackBar.openFromComponent(SnackBarComponent,{
        //     duration:3000,
        //   });
        // }else if(partner == false){
        //   this._snackBar.openFromComponent(SnackBarNotComponent,{
        //     duration:3000,
        //   });
        // }else if(partner==true && this.sentRequest==true){
        //   this._snackBar.openFromComponent(SnackBarNotComponent,{
        //     duration:3000,
        //   });
        // }
       
        
      })
  }
}
