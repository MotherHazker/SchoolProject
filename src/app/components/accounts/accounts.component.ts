import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
accounts;
  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    this.getAllAccounts();
  }
  getAllAccounts(){
    this.accountService.getAccounts()
    .subscribe(data => {
      if(data){
        this.accounts= data;
        console.log(data);
      }
      else{
        console.log("no data")
      }
    });
  }
}
