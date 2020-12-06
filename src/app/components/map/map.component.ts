import { Component, Input, ViewChild, NgZone, OnInit } from '@angular/core';
import { MapsAPILoader, AgmMap, Circle, AgmCircle } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';
import { PredictionService } from '../prediction.service'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  user;
  points;
  location: Location
  marker: any
  selectedMarker : Marker
  circle: any
  arrPoint;
  colors = ['red','yellow','green']
  countryName: string
  constructor(private predictionService: PredictionService){
  this.circle = [];
  this.marker = [];
  this.selectedMarker={
    lat:0,
    lng:0,
    confidence:0,
  }
}
  ngOnInit(): void {
    this.arrPoint = this.predictionService.getTopThree()
    this.user = localStorage.getItem("current user")
      this.location = {
        latitude: this.arrPoint[0].latitude, //start location
        longitude: this.arrPoint[0].longitude,
        zoom: 14,
      }
      this.arrPoint.forEach(element => {
        this.circle.push({lat: (element.latitude),
             lng: (element.longitude),
              radius: (element.radius*1000),
               fillColor: (this.colors[Math.floor((element.confidence*100)/33)]),
                fillOpacity: (element.confidence/2).toString()
              })
              this.marker.push({lat: (element.latitude),
              lng: (element.longitude),
              confidence: (element.confidence)})           
        });
        console.log("circle:")
        console.log(this.circle)
        console.log("marker:")
        console.log(this.marker)
  }
  selectMarker(data:any){
    this.selectedMarker= {
      lat: data["lat"],
      lng: data["lng"],
      confidence: data["confidence"]
    }
    console.log(this.selectedMarker)
  }
  getCountryName(){
    this.countryName = JSON.stringify(this.predictionService.getCountryName(this.selectedMarker.lat,this.selectedMarker.lng));
    console.log("CountryName:")
    console.log(this.countryName)
  }
  f1(){
    this.selectedMarker={
      lat: this.arrPoint[0].latitude,
      lng: this.arrPoint[0].longitude,
      confidence: Math.round(this.arrPoint[0].confidence*100)
    }
    this.location.latitude=this.arrPoint[0].latitude;
    this.location.longitude=this.arrPoint[0].longitude;
    console.log("f1");
    console.log(this.selectedMarker);
  }
  f2(){
    if(this.arrPoint[1]){
      this.selectedMarker={
        lat: this.arrPoint[1].latitude,
        lng: this.arrPoint[1].longitude,
        confidence: Math.round(this.arrPoint[1].confidence*100)
      }
      this.location.latitude=this.arrPoint[1].latitude;
      this.location.longitude=this.arrPoint[1].longitude;
    }
    else{
      alert("This time there is no such point")
    }
    console.log("f2");
    console.log(this.selectedMarker);
  }
  f3(){
    if(this.arrPoint[2]){
      this.selectedMarker={
        lat: this.arrPoint[2].latitude,
        lng: this.arrPoint[2].longitude,
        confidence: this.arrPoint[2].confidence
      }
    }
    else{
      alert("This time there is no such point")
    }
    console.log("f3");
    console.log(this.selectedMarker);
  }
}
interface Location{
  latitude: number;
  longitude: number;
  zoom: number;
}
interface Marker {
  lat: number;
  lng: number;
  confidence:number;
}
