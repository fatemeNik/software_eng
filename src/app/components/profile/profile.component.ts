import { AuthenticationService } from './../../services/authentication.service';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

export interface player_info {
  
  first_name: string;
  last_name: string;
  city: string;
  image: string;
  bio: string;
  coach: string;
  birthday: number;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  saveForm: FormGroup;
  cancelForm: FormGroup;
  id: any;
  user: any;

  constructor(private formbuilder: FormBuilder, private api: ApiService,
  private auth: AuthenticationService){}

  ngOnInit(): void {

  this.user = JSON.parse(localStorage.getItem("currentUser"));
  this.id = this.user.id;
  this.saveForm = this.formbuilder.group({

    firstName:['', [Validators.required]],
    lastName:['', [Validators.required]],
    password:['', [Validators.required]],
    city:['', [Validators.required]],
    // image:['', [Validators.required]],
    bio:['', [Validators.required]],
    coach:['', [Validators.required]],
    birthday:['', [Validators.required]],


 });

// console.log(this.user.iripin);

//  this.api.specific_player_data(this.user.iripin).subscribe(data=>{
  // this.saveForm.controls.firstName.setValue(data.first_name);
  // this.saveForm.controls.lastName.setValue(data.lastname);
  // this.saveForm.controls.password.setValue('hi');
  // this.saveForm.controls.city.setValue('salam');
  // // this.saveForm.controls.image.setValue(this.user.image);
  // this.saveForm.controls.bio.setValue(this.user.bio);
  // this.saveForm.controls.coach.setValue(this.user.coach);
  // this.saveForm.controls.birthday.setValue(this.user.birthday);
//  });
  this.saveForm.controls.firstName.setValue(this.user.first_name);
  this.saveForm.controls.lastName.setValue(this.user.last_name);
  // this.saveForm.controls.password.setValue(this.user.password);
  this.saveForm.controls.city.setValue(this.user.city);
  // this.saveForm.controls.image.setValue(this.user.image);
  this.saveForm.controls.bio.setValue(this.user.bio);
  this.saveForm.controls.coach.setValue(this.user.coach);
  this.saveForm.controls.birthday.setValue(this.user.birthday);


  }

  onC(){
    console.log(this.user);
  }
  onsubmit(){
     
    localStorage.getItem('user');
    this.api.update_player_data(this.saveForm.value).subscribe(data => {
    
    });
  }
}
