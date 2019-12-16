
import { Component, OnInit } from '@angular/core';
import { AdministratorDataService } from '../Services/administrator-data.service';

@Component({
  selector: 'app-administrations',
  templateUrl: './administrations.component.html',
  styleUrls: ['./administrations.component.scss']
})
export class AdministrationsComponent implements OnInit {
  constructor(private administratorService: AdministratorDataService){}
  administrators: any;
  ngOnInit(){
    this.GetAllAdministratorsOnLoad();  
  }
  
  GetAllAdministratorsOnLoad(){
    this.administratorService.GetAllAdministrators().subscribe(data =>{
      //console.log(data);
      //this.allUsers = data;
      this.administrators = data;
      console.log(this.administrators);
    })
  }

  EditAdministrator(id){
    
  }
  DeleteAdministrator(id){
    alert("your id "+id);
    this.administratorService.DeleteAdministrator(id).subscribe(data => {
      if(data ==1){
        alert("You have successfully deleted an administrator");
      }
      else if(data ==0){
        alert("Something went wrong. Please try again"); 
      }
    })
  }

  addNewAdministrator(data){
    console.log(data);
    this.administratorService.CreateNewAdministrator(data).subscribe(data => {
      console.log(data);
      this.GetAllAdministratorsOnLoad();
      alert("You have successfully created a new user");
    })
  }

}
