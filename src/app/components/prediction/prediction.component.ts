import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { PredictionService } from '../prediction.service'
@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {
  public date: Date = new Date(Date.now());
  events: string[] = [];
  myModel = {date: '', hhmm: ''}
  prediction;
  constructor(private predictionService: PredictionService,private router:Router,) { }
  ngOnInit(): void {
  }
  Save()
  {
    var date = this.myModel.date.toString().split("00")[0];
    var hhmm = this.myModel.hhmm;
    var mydate = Date.parse(date+" "+hhmm)/1000;
    var strTimestamp = JSON.stringify(mydate);
    localStorage.setItem("timestamp",strTimestamp)
    console.log(mydate);
  }
  getPrediction(){
    this.predictionService.getPrediction()
    .subscribe(data => {
      if(data){
        this.prediction= data;
        console.log(data);
        var points = JSON.stringify(data)
        localStorage.setItem("points",points)
        this.moveToMap();
      }
      else{
        console.log("no data help me im retardedddd")
      }
    });
  }
  moveToMap(){
    this.router.navigateByUrl('map')
  }
}
