import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SharedDataService } from 'src/app/services/sharedData.service';

// export interface Tile {
//   color: string;
//   cols: number;
//   rows: number;
//   text: string;
// }

export interface content_table {

  content: string;
}


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  
  // tiles: Tile[] = [
  //   {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
  //   {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  //   {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  //   {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  // ];

  public messageForm : FormGroup;

  content : string;

  dataSource: any;
  loading: boolean = false;
  columnsToDisplay = ['content'];
  expandedElement: content_table | null;

  constructor(private formbuildr:FormBuilder, private sharedData: SharedDataService,
    private api: ApiService, private auth: AuthenticationService) {
    
    this.api.show_content().subscribe(data =>{
      this.dataSource = data;
    });

    this.loading = true;

     }

  ngOnInit(): void {

    this.sharedData.content.subscribe(name =>{

      this.content = name;
    });

    this.messageForm = this.formbuildr.group({
      to :['', [Validators.required]],
      content :['', [Validators.required]]
    });
  }

  message(){
    
      this.auth.message(this.messageForm.value).subscribe(data =>   
        {
          if(data)
          
          console.log(data);
        },
        err=>{
         
        })
    }

    show_content(){
    
      this.auth.show_content(this.messageForm.value).subscribe(data =>   
        {
          if(data)
          
          console.log(data);
        },
        err=>{
         
        })
    }
 
  }