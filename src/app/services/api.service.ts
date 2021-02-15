import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';
import { SharedDataService } from './sharedData.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient ,private authenticationService: AuthenticationService,
     private sharedData: SharedDataService ) {}

     get_player_data(){

      let header: HttpHeaders = new HttpHeaders();
      header.append( "Content-Type", "application/json" );
      return this.http.get('https://inshallahfinal.herokuapp.com/player', {headers: header});
    } 

    logout_player(){

      let header: HttpHeaders = new HttpHeaders();
      header.append( "Content-Type", "application/json");
      return this.http.get('http://127.0.0.1:5000/logout', {headers: header});
    } 

    update_player_data(data){
      let currentUser = this.authenticationService.currentUserValue;
      console.log(String(currentUser.token));
      //  let header: HttpHeaders = new HttpHeaders();
      //  header.append( "Content-Type", "application/json" );
      //  header.append( "x-access-token", String(currentUser.token) );
      //return this.http.put('http://127.0.0.1:5000/new',data, {headers: header});
      return this.http.put('http://127.0.0.1:5000/update', data);
    }

    get_tournament(){

      let header: HttpHeaders = new HttpHeaders();
      header.append( "Content-Type", "application/json" );
      return this.http.get('https://inshallahfinal.herokuapp.com/tournament', {headers: header});
    }

    get_signup(){  
      let header: HttpHeaders = new HttpHeaders();
      header.append( "Content-Type", "application/json" );
      return this.http.get('http://127.0.0.1:5000/signup', {headers: header});
    }

    get_message(){  
      let header: HttpHeaders = new HttpHeaders();
      header.append( "Content-Type", "application/json" );
      header.append("Access-Control-Allow-Origin","*");
      return this.http.get('http://127.0.0.1:5000/message', {headers: header});
    }

        
     
    show_content(data) {
      return this.http.post<any>('http://127.0.0.1:5000/show_content', data)
          .pipe(map(user => {
              this.sharedData.to.next(user.to);
              console.log(user);
              return user;
          }));
  }

  request(data) {
    let header: HttpHeaders = new HttpHeaders();
    header.append( "Content-Type", "application/json" );
    this.sharedData.to.next(data.to);
    console.log(data);
    return this.http.post<any>('http://127.0.0.1:5000/request', {to:data});
    
}

  request_list() {
  let header: HttpHeaders = new HttpHeaders();
  header.append( "Content-Type", "application/json" );
  
  //console.log(String(this.http.get<any>('http://127.0.0.1:5000/request', {headers: header})));
  return this.http.get<any>('http://127.0.0.1:5000/request', {headers: header});
  
}

 accept_request(data) {
  let header: HttpHeaders = new HttpHeaders();
  header.append( "Content-Type", "application/json" );
  
  this.sharedData.id.next(data.id);
   
  console.log(data);
   
   return this.http.post<any>('http://127.0.0.1:5000/accept_request', {id:data})
 }

 reject_request(data) {
  let header: HttpHeaders = new HttpHeaders();
  header.append( "Content-Type", "application/json" );
  
  this.sharedData.id.next(data.id);
   
  console.log(data);
   
   return this.http.post<any>('http://127.0.0.1:5000/reject_request', {id:data})
 }

 
}
