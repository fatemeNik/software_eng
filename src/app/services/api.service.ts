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

    update_player_data(data){
      let currentUser = this.authenticationService.currentUserValue;
      // let content = {}
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

    // specific_player_data(iripin){

    //   let header: HttpHeaders = new HttpHeaders();
    //   header.append( "Content-Type", "application/json" );
    //   return this.http.get('https://inshallahfinal.herokuapp.com/update/'+iripin);
    // }

}
