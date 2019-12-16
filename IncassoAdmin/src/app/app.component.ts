import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router'; 
import { UserDataService } from './Services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private cookies: CookieService,
              private router : Router,
              private userService: UserDataService      
      ){

  }

  //isLogedIn = false;
    //isLogedIn = this.userService.isLogedIn;
   LogedInUserName = "";

  IfUserLogedIn(){
    if(this.cookies.get("LogedInUser") != "" ){
      this.LogedInUserName = this.cookies.get("LogedInUserName");
      //console.log("The value of cookie on page load is "+this.cookies.get("LogedInUser"));
      //this.isLogedIn = true;
      return true;
    }
    else{
      //console.log("The value of cookie on page load is "+this.cookies.get("LogedInUser"));
      //this.isLogedIn = false;
      return false;

    }
  }

  title = 'IncassoAdmin';



   UserLogout(){
     //this.isLogedIn = false;
     this.cookies.delete("LogedInUser");
     this.cookies.deleteAll();
     this.router.navigate(['login']);
   }

}
