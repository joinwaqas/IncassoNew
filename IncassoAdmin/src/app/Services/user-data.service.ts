
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/map'
import { Users} from '../Classes/Users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

apiUrl: string = "https://localhost:44316/api/Users/";

  constructor(private httpClient: HttpClient) { }

  isLogedIn = false;

  RegisterUser(user: Users): Observable<any>{
    console.log("Data coming from user is "+user.emailAddress);
    return this.httpClient.post(this.apiUrl+"CreateUser",user);
  }

  LoginUser(user: Users): Observable<any>{
    return this.httpClient.post(this.apiUrl+"UserLogin",user);
    this.isLogedIn = true;
  }
  GetAllUsers(){
    return this.httpClient.get(this.apiUrl+"GetAllUsers");
  }

}
