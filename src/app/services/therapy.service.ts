import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Therapy } from '../models/therapy';
import{ GlobalConstants } from '../common/constants';

@Injectable({
  providedIn: 'root'
})
export class TherapyService {

  public static host = GlobalConstants.apiURL + GlobalConstants.port;

  constructor(private http: HttpClient) { }

  createNew(therapy: Therapy):Observable<String> {
    const headers = new HttpHeaders();
    return this.http.post<string>(GlobalConstants.apiURL + GlobalConstants.port + "/transaction/newTherapyTransaction",
     therapy, {headers, withCredentials: true});
  }

  public getDiagnosis (diagnosisId): Observable<Therapy> {
    return this.http.get<Therapy>(TherapyService.host +'therapies/'
    + diagnosisId);
  }

  public getAllDiagnosis (): Observable<Therapy[]> {
    return this.http.get<Therapy[]>(TherapyService.host +'therapies/');
  }
}
