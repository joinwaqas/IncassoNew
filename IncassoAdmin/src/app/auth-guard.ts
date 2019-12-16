
import {
    CanActivate, ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';
import { UserDataService } from '../app/Services/user-data.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {

    constructor(private loginservice: UserDataService, private cookies: CookieService) { }

    canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):
     boolean
     {
         console.log(this.cookies.get("LogedInUser"));

         if(this.cookies.get("LogedInUser") != null){
             return true;
         }
        // if (this.loginservice.isLogedIn) {
            
        //     // if we return true user is allowed to access that route
        //     return true;
        // } 
        else {
            // if we return false user is not allowed to access
            return false;
        }
    }

}