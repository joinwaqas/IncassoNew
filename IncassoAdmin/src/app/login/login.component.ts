import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../Services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  constructor(private userService: UserDataService) { }

  onClickSubmit(data){
    this.userService.LoginUser(data).subscribe(
      data => {
        console.log(data);
      }
    )
    //console.log(data);
  }

}

