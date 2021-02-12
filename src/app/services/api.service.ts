import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient ,private authenticationService: AuthenticationService ) {}

     get_player_data(){

      let header: HttpHeaders = new HttpHeaders();
      header.append( "Content-Type", "application/json" );
      return this.http.get('https://inshallahfinal.herokuapp.com/player', {headers: header});
    } 

    logout_player(){

      let header: HttpHeaders = new HttpHeaders();
      header.append( "Content-Type", "application/json" );
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

    show_content(){
      let header: HttpHeaders = new HttpHeaders();
      header.append( "Content-Type", "application/json" );
      header.append("Access-Control-Allow-Origin","*");
      return this.http.post('http://127.0.0.1:5000/show_content', {headers: header});
    }

    // post_message(data){

    //   let header: HttpHeaders = new HttpHeaders();
    //   header.append( "Content-Type", "application/json" );      //  let header: HttpHeaders = new HttpHeaders();
    //   //  header.append( "Content-Type", "application/json" );
    //   //  header.append( "x-access-token", String(currentUser.token) );
    //   //return this.http.put('http://127.0.0.1:5000/new',data, {headers: header});
    //   return this.http.post('http://127.0.0.1:5000/message', data);
    // }

}
