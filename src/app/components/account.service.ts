import { Injectable } from '@angular/core';
import { Account } from './account';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private accountUrl = "https://onpoint-backend.herokuapp.com/api/accounts"; //connection to the server
  account:any;
  _id;
  constructor(private http: HttpClient) { }
  getAccounts (): Observable<Account[]> { //admin-rights function. Users of the site don't use it.
    return this.http.get<Account[]>(this.accountUrl + "/getall")
  }
  addNewAccount (account:Account): Observable<Account> { //registration
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    var obj = {account:account};
   return this.http.post<Account>(this.accountUrl + '/addAccount', obj, httpOptions)
  }

  updateNewAccount (account:Account): Observable<Account> { //function to update detail of the account
    const httpOptions = {                                  // for instance - changing of password
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    var obj = {account:account};
   return this.http.post<Account>(this.accountUrl + '/update', obj, httpOptions)
  }

  logToAccount(account:Account): Observable<Account>{ // authorization
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    var obj = {account:account};
    return this.http.post<Account>(this.accountUrl + '/SignIn', obj, httpOptions)
  }
}
