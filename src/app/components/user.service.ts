import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './User';
import { Router } from "@angular/router"

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl="https://onpoint-backend.herokuapp.com/api/users"
  user:any
  _id;
  constructor(private http: HttpClient, private router:Router) { }
  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl + "/getall")
  }
  getUsersById(account:Account): Observable<Account>{ //getting list of users of particular account
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    var id = JSON.parse(localStorage.getItem("account"))._id
    if(id){
      var obj = {_id:id};
      this.router.navigateByUrl("location_history")
      return this.http.post<Account>(this.userUrl + '/getall?accountId='+id, obj, httpOptions)
    }
    else{
      alert("no permission")
    }
  }
  getAmount(){
    return this.http.get<Object>(this.userUrl + "//getTotalNumberOfUsers")
  }
}
