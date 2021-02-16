import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})  


export class LoginComponent implements OnInit {


  // role: string;
  // roles: string[] = ['بازیکن', 'پارتنر'];
  partner:string='partner';
  player:string='player';

  
  public loginForm: FormGroup;
  public SignUpForm: FormGroup;
  public text_login = '';
  public text_signup = '';
  
  hide = true;
  
  constructor(private formbuildr:FormBuilder, private http:HttpClient,
     private auth: AuthenticationService,public dialogRef: MatDialogRef<LoginComponent> ,private api:ApiService) { }

  ngOnInit(): void {
    this.api.request_list();
    this.loginForm = this.formbuildr.group({
      iripin :['', [Validators.required]],
      password :['', [Validators.required]]
    });

    this.SignUpForm = this.formbuildr.group({
      iripin :['', [Validators.required]],
      password :['', [Validators.required]],
      role :['', [Validators.required]],
      a_con_password :['', [Validators.required]]
    });
  }

  login(){
    
    if(this.f.iripin.invalid){
      this.text_login = "خطا در ورود!";
      return
    }else if (this.f.password.invalid) {
      this.text_login = "گذرواژه اشتباه است!"
      
    }else{

      this.auth.login(this.loginForm.value).subscribe(data =>   
        {
          if(data)
            this.onNoClick();
          console.log(data);
        },
        err=>{
          this.text_login = " یا گذرواژه اشتباه است iripin "
        })
    }
  } 

   signup(){
       if(this.s.a_con_password.value == this.s.password.value){
        this.auth.signup(this.SignUpForm.value).subscribe(data =>   
          { 
            if(data)
               this.text_signup = "ثبت نام با موفقیت انجام شد"
               //this.onNoClick();
            console.log(data);
           
          })
        }else{
          console.log(this.s.a_con_password);
          console.log(this.s.password);
          
          this.text_signup = "گذرواژه ها مطابقت ندارند"
        }   
   }  


  onNoClick(): void {
    this.dialogRef.close();
  }

  get f(){
    return this.loginForm.controls;
  }

  get s(){
    return this.SignUpForm.controls;
  }

}