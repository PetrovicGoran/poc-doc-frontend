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

  public getTherapiesDoctor (doctorPrivateKey): Observable<Therapy[]> {
    const headers = new HttpHeaders(); 
    var data = {"doctorPrivateKey" : doctorPrivateKey}
    return this.http.post<Therapy[]>(TherapyService.host + '/blockchain/getTherapiesDoctor', data, 
    { headers, withCredentials: true }).pipe(
      map(therapies => {
          return therapies;
      }
     ));
  }

  public getTherapiesPatient (patientPublicKey): Observable<Therapy[]> {
    const headers = new HttpHeaders(); 
    var data = {"patientPublicKey" : patientPublicKey}
    return this.http.post<Therapy[]>(TherapyService.host + '/blockchain/getTherapiesPatient', data, 
    { headers, withCredentials: true }).pipe(
      map(therapies => {
          return therapies;
      }
     ));
  }
}
