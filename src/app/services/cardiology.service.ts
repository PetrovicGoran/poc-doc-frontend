import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Measurement } from '../models/measurement';
import{ GlobalConstants } from '../common/constants';

@Injectable({
  providedIn: 'root'
})
export class CardiologyService {

  public static host = GlobalConstants.apiURL + GlobalConstants.port;

  constructor(private http: HttpClient) { }

  public  getAllMeasurementsDoctor (doctorPublicKey : string): Observable<Measurement[]> {
    const headers = new HttpHeaders(); 
    var data = {"doctorPublicKey" : doctorPublicKey}
    return this.http.post<Measurement[]>(CardiologyService.host + '/blockchain/getMeasureDataDoctor', data, 
    { headers, withCredentials: true }).pipe(
      map(measures => {
          return measures;
      }
     ));
  }

  public getAllMeasurementsPatient (patientPrivateKey : string): Observable<Measurement[]> {
    const headers = new HttpHeaders(); 
    var data = {"patientPrivateKey" : patientPrivateKey}
    return this.http.post<Measurement[]>(CardiologyService.host + '/blockchain/getMeasureDataPatient', data, 
    { headers, withCredentials: true }).pipe(
      map(measures => {
          return measures;
      }
     ));
  }

}
