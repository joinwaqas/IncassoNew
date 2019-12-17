
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/map'
import { User } from '../Classes/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

apiUrl: string = "https://localhost:44372/api/User/";

  constructor(private httpClient: HttpClient) { }

  isLogedIn = false;

  RegisterUser(user: User): Observable<any>{
    //console.log("Data coming from user is ");
    return this.httpClient.post(this.apiUrl+"RegisterUser",user);
  }

  LoginUser(user: User): Observable<any>{
    return this.httpClient.post(this.apiUrl+"UserLogin",user);
    
    this.isLogedIn = true;
  }
  GetAllUsers(){
    return this.httpClient.get(this.apiUrl+"GetAllUsers");
  }

}
