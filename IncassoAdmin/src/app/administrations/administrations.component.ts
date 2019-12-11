import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrations',
  templateUrl: './administrations.component.html',
  styleUrls: ['./administrations.component.scss']
})
export class AdministrationsComponent {

  addNewAdministrator(data){
    console.log(data);
  }

}
