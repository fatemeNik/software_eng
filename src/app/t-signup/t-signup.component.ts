import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { SharedDataService } from '../services/sharedData.service';

@Component({
  selector: 'app-t-signup',
  templateUrl: './t-signup.component.html',
  styleUrls: ['./t-signup.component.scss']
})
export class TSignupComponent implements OnInit {
  
  public tSignUpForm : FormGroup;
  first_name:string;
  last_name:string;
  iripin:string;
  age:string;
  id:string;

  text=''

  constructor(private api: ApiService,private sharedData: SharedDataService,private formbuildr:FormBuilder) { }

  ngOnInit(): void {
 
    this.tSignUpForm = this.formbuildr.group({
      first_name :['', [Validators.required]],
      last_name :['', [Validators.required]],
      iripin :['', [Validators.required]],
      age :['', [Validators.required]],
      id :['', [Validators.required]]
    });
  }

  
  tournament_signup(){
    
      this.api.tournament_signup(this.tSignUpForm.value).subscribe(data =>   
        { 
          if(data)
             this.text = "ثبت نام با موفقیت انجام شد"
             //this.onNoClick();
          console.log(data);
         
        })
}
      get t(){
        return this.tSignUpForm.controls;
      }
}


