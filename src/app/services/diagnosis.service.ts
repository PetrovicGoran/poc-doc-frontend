import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Diagnosis } from '../models/diagnosis';
import{ GlobalConstants } from '../common/constants';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisService {

  public static host = GlobalConstants.apiURL + GlobalConstants.port;

  constructor(private http: HttpClient) { }

  createNew(diagnosis: Diagnosis):Observable<String> {
    const headers = new HttpHeaders();

    return this.http.post<string>(GlobalConstants.apiURL + GlobalConstants.port + "/transaction/newDiagnosisTransaction",
     diagnosis, {headers, withCredentials: true});
  }

  //after
  public getDiagnosisDoctor (doctorPrivateKey): Observable<Diagnosis[]> {
    const headers = new HttpHeaders(); 
    var data = {"doctorPrivateKey" : doctorPrivateKey}
    return this.http.post<Diagnosis[]>(DiagnosisService.host + '/blockchain/getDiagnosisDoctor', data, 
    { headers, withCredentials: true }).pipe(
      map(diagnoses => {
          return diagnoses;
      }
     ));
  }

  //after
  public getDiagnosisPatient (patientPublicKey): Observable<Diagnosis[]> {
    const headers = new HttpHeaders(); 
    var data = {"patientPublicKey" : patientPublicKey}
    return this.http.post<Diagnosis[]>(DiagnosisService.host + '/blockchain/getDiagnosisPatient', data, 
    { headers, withCredentials: true }).pipe(
      map(diagnoses => {
          return diagnoses;
      }
     ));
  }














}
