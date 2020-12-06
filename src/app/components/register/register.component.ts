import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  Roles: any = ['Admin', 'Author', 'Reader'];
  Account = {name:"",description:"",email:"",password:""};
  constructor(private accountService:AccountService) { }

  ngOnInit() {
  }
  addUser(){
    console.log(this.Account);
    alert(this.Account.name + this.Account.description + this.Account.email + this.Account.password);
    this.accountService.addNewAccount(this.Account)
    .subscribe(data => {
      if(data){
        this.Account= data;
        console.log(data);
      }
      else{
        console.log("no data")
      }
    });
  }
}