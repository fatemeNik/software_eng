import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient ) {}

     get_player_data(){

      let header: HttpHeaders = new HttpHeaders();
      header.append( "Content-Type", "application/json" );
      return this.http.get('https://inshallahfinal.herokuapp.com/player', {headers: header});
    } 

    update_player_data(data){

      let header: HttpHeaders = new HttpHeaders();
      header.append( "Content-Type", "application/json" );
      return this.http.put('https://inshallahfinal.herokuapp.com/update', data);
    }

    // specific_player_data(iripin){

    //   let header: HttpHeaders = new HttpHeaders();
    //   header.append( "Content-Type", "application/json" );
    //   return this.http.get('https://inshallahfinal.herokuapp.com/update/'+iripin);
    // }

}
