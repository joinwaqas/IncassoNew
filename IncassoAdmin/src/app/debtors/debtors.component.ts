import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-debtors',
  templateUrl: './debtors.component.html',
  styleUrls: ['./debtors.component.scss']
})
export class DebtorsComponent implements OnInit {

  constructor(private router: Router){

  }
  ngOnInit(){
    //to get the current route
    console.log(this.router.url);
  }
  addNewDebtor(data){
    console.log(data);
    this
  }

  getEvent(event){
    alert(event.checked);
  }

}
