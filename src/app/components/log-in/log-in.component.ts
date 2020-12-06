import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  Account = {name:"",description:"",email:"",password:""};
  constructor(private accountService:AccountService,private router:Router,) { }

  ngOnInit(): void {
  }
  logToAccount(){ //logging into existing account
    console.log(this.Account);
    alert(this.Account.name + this.Account.description + this.Account.email + "  "+this.Account.password);
    this.accountService.logToAccount(this.Account)
    .subscribe(data => {
      if(data){
        this.Account= data;
      console.log(data);
      var strAccount = JSON.stringify(this.Account);
        localStorage.setItem("account",strAccount);
        this.router.navigateByUrl("location_history")
      }
      else{
        console.log("no data")
        console.log(data)
      }
    });
  }
}
