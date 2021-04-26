import { SharedDataService } from './sharedData.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;

    constructor(private http: HttpClient, private sharedData: SharedDataService) {
        // let temp =localStorage.getItem('currentUser');
        // let temp =localStorage.getItem('currentUser');
        // if (temp) {
        //     this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(temp));
        //     this.currentUser = this.currentUserSubject.asObservable();
        // }
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

    login(data) {
        return this.http.post<any>('https://inshallahfinal.herokuapp.com/auth', data)
            .pipe(map(user => {
                this.sharedData.fname.next(user.first_name); 
                this.sharedData.lname.next(user.last_name); 
                this.sharedData.isLogin.next(true);
                //store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                console.log(user);
                return user;
            }));
    }
 
    message(data) {
        return this.http.post<any>('https://inshallahfinal.herokuapp.com/message', data);
    }
    

    signup(data){
        console.log(data);
        return this.http.post<any>('https://inshallahfinal.herokuapp.com/signup',data);
           
     }
      
 

    logout() {
        console.log(JSON.parse(localStorage.getItem('currentUser')));
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        console.log(JSON.parse(localStorage.getItem('currentUser')));
        this.sharedData.isLogin.next(false);
        this.currentUserSubject.next(null);

    }
}