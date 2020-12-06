import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { PredictionService } from '../prediction.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  amountU=10;
  amountP;
  DP;
  
  constructor(private userService:UserService, private predictionService:PredictionService) { }

  ngOnInit(): void {
    this.getAmountOfUsers();
    this.getAmountOfPredictions();
    this.getTotalDP();
  }
  getAmountOfUsers(){
      this.userService.getAmount().subscribe((data) => {
      console.log("amount of users")
      console.log(data);
      //this.amountU=data;
    })    
  }
  getAmountOfPredictions(){
    this.amountP = this.predictionService.getAmountOfPredictions()
    console.log("Amount of predictions")
    console.log(this.amountP);
  }
  getTotalDP(){
    this.DP = this.predictionService.getTotalDP();
    console.log("total DP")
    console.log(this.DP);
  }
}
