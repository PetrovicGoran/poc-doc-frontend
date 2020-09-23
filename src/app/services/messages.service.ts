import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Subject } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '../models/message';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  public static host = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  public messages:Subject<Message[]> = new Subject();

  public getMessages (): Observable<Message[]> {
    return this.http.get<Message[]>(MessagesService.host + 'messages/'
    + window.location.href.split('/')[4] + '/' + window.location.href.split('/')[5]);
  }

  public addMessage(message:Message) : Observable<Message[]> {
    const headers = new HttpHeaders();
    return this.http.post<Message[]>(MessagesService.host +'messages/', message,
    { headers, withCredentials: true }).pipe(
      map(message => {
        if (message) {
          console.log(JSON.stringify(message));
        }
        return message;
      }
    )
  );
  }


}
