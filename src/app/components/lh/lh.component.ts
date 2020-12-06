import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-lh',
  templateUrl: './lh.component.html',
  styleUrls: ['./lh.component.css']
})
export class LHComponent implements OnInit {
users;
  constructor(private userService:UserService,private router:Router,) { }

  ngOnInit(): void { 
    var a = localStorage.getItem("account")
    var jsnData=JSON.stringify(a);
    this.getAllUsers(jsnData)
  }
  getAllUsers(jsnData){
    this.userService.getUsersById(jsnData)
    .subscribe(data => {
      if(data){
        this.users= data;
        console.log(data);
      }
      else{
        console.log("no data")
      }
    });
  }
  moveToPrediction(user){
    console.log(user);
    var strUser = JSON.stringify(user);
    localStorage.setItem("current user",strUser)
    this.router.navigateByUrl('prediction')
  }
}
