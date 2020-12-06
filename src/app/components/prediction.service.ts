import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {
  private predictUrl="https://onpoint-backend.herokuapp.com/api/prediction/"
  user:any;
  _id;

  constructor(private http: HttpClient) { }
  
  getPrediction(){ //getting prediction points needed for markers
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    var id = JSON.parse(localStorage.getItem("current user"))._id
    var obj = {_id:id};
    return this.http.post<Account>(this.predictUrl + 'getPredict/'+id+'?timestamp='+localStorage.getItem("timestamp"), obj, httpOptions)
  }

  getTopThree(){
    var item = JSON.parse(localStorage.getItem("points")) //sorting of points by confidence 
    var points = item["points"]
    console.log(points)
    var arr = []
    for(var i=0;i<points.length;i++)
    {
      var currentPoint = points[i]
      var key = Object.keys(currentPoint)[0];
      var confiedence = currentPoint[key];
      if(confiedence>0.01) 
      {
        arr.push(points[i])
      }
      console.log(confiedence)
    }
    console.log("arr")
    console.log(arr)
    return arr;
  }
  getCountryName(latitude,longitude){ // reverse geocoding function. Gets na address from coordinates
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.http.get<Location>("https://maps.google.com/maps/api/geocode/json?latlng="+latitude+","+longitude+"&key=AIzaSyCxOseC_M_a0uh4DtIGe1-391FUwt9z8C8&sensor=false").subscribe(
      data=>{
        console.log("data:");
        console.log(data.results[2].formatted_address)
        return data.results[2].formatted_address;
      }
    ) 
  }
  getAmountOfPredictions(){
    return this.http.get<Location>(this.predictUrl+"/TotalOfPredictions").subscribe(
      data=>{
        console.log("amount of predictions:");
        console.log(data)
        return data;
      }
    )
  }
  getTotalDP(){ //delay needed
    return this.http.get<Location>("https://onpoint-backend.herokuapp.com/api/locationHistories/TotalofDataPoints").subscribe(
      data=>{
        console.log("amount of data points:");
        console.log(data)
        return data;
      }
    )
  }
}
interface Location {
  results: JSON;
}