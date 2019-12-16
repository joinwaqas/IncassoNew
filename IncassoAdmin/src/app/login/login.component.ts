import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../Services/user-data.service';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  constructor(private userService: UserDataService,
    private cookies: CookieService,
    private appComponent: AppComponent,
    private router: Router
  ) { }

  

  onClickSubmit(data) {
    this.userService.LoginUser(data).subscribe(
      data => {

        if (data != null) {

          //this.appComponent.isLogedIn = true;
          this.userService.isLogedIn = true;
          //this.appComponent.LogedInUserName= data.firstName;
          this.cookies.set("LogedInUserName", data.firstName);
          // console.log(data);
          this.cookies.set("LogedInUser", data.firstName);
          this.router.navigate(['dashboard']);
        }
      }
    )
    //console.log(data);
  }

}

