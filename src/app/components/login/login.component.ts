import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})  

export class LoginComponent implements OnInit {


  public loginForm: FormGroup;
  public SignUpForm: FormGroup;
  public text_login = '';
  public text_signup = '';
  
  hide = true;
  
  constructor(private formbuildr:FormBuilder, private http:HttpClient,
     private auth: AuthenticationService,public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
    this.loginForm = this.formbuildr.group({
      iripin :['', [Validators.required]],
      password :['', [Validators.required]]
    });

    this.SignUpForm = this.formbuildr.group({
      a_iripin :['', [Validators.required]],
      a_password :['', [Validators.required]],
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
    
    if(this.f.a_iripin.invalid){
      this.text_signup = "!خطا در ورود";
      return
    }else if (this.f.a_password.invalid) {
      this.text_signup = "!گذرواژه اشتباه است"
      
    }else if(this.f.a_con_password.invalid){
      this.text_signup = "!گذرواژه اشتباه است"
    }else{

      this.auth.login(this.loginForm.value).subscribe(data =>   
        {
          if(data)
            this.onNoClick();
          console.log(data);
        },
        err=>{
          this.text_signup = "یا گذرواژه اشتباه است iripin"
        })
    }
  }  


  onNoClick(): void {
    this.dialogRef.close();
  }

  get f(){
    return this.loginForm.controls;
  }

}