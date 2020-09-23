import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { MyTransaction } from '../models/my-transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  public static host = 'http://localhost:3000/';

  constructor(private http: HttpClient,private route: ActivatedRoute, private router: Router) { }

  executeTransaction(privFrom, pubTo, amount) : Observable<string> {
    const headers = new HttpHeaders();

    const sendData = {"prk": privFrom, "recipantAddress": pubTo, "points": amount};

    return this.http.post<string>("http://192.168.18.7:8080/transaction/newTransaction", sendData, {headers, withCredentials: true});
  }

  listMyTransactions(privateKey): Observable<MyTransaction[]> {
    const headers = new HttpHeaders();

    const sendData = {"privateKey": privateKey};

    return this.http.post<MyTransaction[]>("http://192.168.18.7:8080/transaction/myTransactions", sendData, {headers, withCredentials: true});
  }

  //METHODS FOR API TRANSACRIONS


}
