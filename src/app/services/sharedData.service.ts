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

 

constructor() {

 }

}

