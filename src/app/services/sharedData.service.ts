import { AuthenticationService } from 'src/app/services/authentication.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  // private content = new BehaviorSubject<str>();

  lname: BehaviorSubject<any> = new BehaviorSubject('');
  fname: BehaviorSubject<any> = new BehaviorSubject('');
  isLogin: BehaviorSubject<boolean> = new BehaviorSubject(false);// in bayad ke false bashe
  to : BehaviorSubject<any> = new BehaviorSubject('');
  content : BehaviorSubject<any> = new BehaviorSubject(''); 
  sender : BehaviorSubject<any> = new BehaviorSubject(''); 
  id : BehaviorSubject<any> = new BehaviorSubject(''); 
  role : BehaviorSubject<any> = new BehaviorSubject(''); 
  iripin : BehaviorSubject<any> = new BehaviorSubject(''); 
  password : BehaviorSubject<any> = new BehaviorSubject('');
  confirm_password : BehaviorSubject<any> = new BehaviorSubject(''); 
  parentNotif : BehaviorSubject<any> = new BehaviorSubject(''); 


constructor() {

 }

}

