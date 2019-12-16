import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Administrator } from '../Classes/Administrator';
@Injectable({
  providedIn: 'root'
})
export class AdministratorDataService {

  constructor(private http: HttpClient) { }

  apiUrl: string = "http://localhost:58585/api/Administrator/";

  CreateNewAdministrator(administrator: Administrator): Observable<any>{
      return this.http.post(this.apiUrl+"CreateNewAdministrator",administrator);
  }

  GetAllAdministrators(){
    return this.http.get(this.apiUrl+ "GetAllAdministrators")
  }

  DeleteAdministrator(id){
    return this.http.post(this.apiUrl+"DeleteAdministrator",id);
  }

}
