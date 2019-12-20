
import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../Services/user-data.service';
import { User } from '../Classes/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  showProgressbar = false;
  constructor(private userService: UserDataService) { }
  //users: Observable<Users[]>;
  users: any;
  ngOnInit() {
      this.GetAllUserOnLoad();
  }
  
  GetAllUserOnLoad(){
    this.userService.GetAllUsers().subscribe(data =>{
      //console.log(data);
      //this.allUsers = data;
      this.users = data;
      console.log(this.users);
    })
  }

  CreateNewUser(data){
    this.showProgressbar = true;
    this.userService.RegisterUser(data).subscribe(data =>
      {
        if(data == 1){
          this.showProgressbar = false;
          //alert("New User has been created successfully");
          this.GetAllUserOnLoad();
        }
        else if(data == 0){
          alert("Something went wrong");
          this.showProgressbar = false;
        }
      })
  }

}
