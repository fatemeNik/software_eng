import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SharedDataService } from 'src/app/services/sharedData.service';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkVirtualScrollViewport} from "@angular/cdk/scrolling";

export interface content_table {

  content: string;
}
 

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  contents :string[];

  sender : string;

  dataSource: any;
  loading: boolean = false;


  constructor(private formbuildr:FormBuilder, private sharedData: SharedDataService,
    private api: ApiService, private auth: AuthenticationService) {
    
    // this.api.show_content().subscribe(data =>{
    //   this.dataSource = data;
    // });



    this.loading = true;

     }

  ngOnInit(): void {

    this.sharedData.content.subscribe(name =>{

      this.content = name; 
      if(name)
        this.contents.push(name);
    });

    this.sharedData.sender.subscribe(name =>{

      this.sender = name;
    });

    this.messageForm = this.formbuildr.group({
      to :['', [Validators.required]],
      content :['', [Validators.required]]
    });
  }

  message(){
    
      this.auth.message(this.messageForm.value).subscribe(res=>{
        console.log(this.sharedData.content.value);
        this.sharedData.to.next(res.to);
        this.sharedData.content.next(res.content); 
        console.log(this.sharedData.content.value);
        });
    }

    
  
    show_content(){
    
      this.api.show_content(this.messageForm.value).subscribe(res =>   
        {
          this.sharedData.to.next(res.to);
                
                console.log(this.sharedData.to.value);
              
        })
      }
 

  }