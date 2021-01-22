import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Analysis } from '../models/analysis';
import{ GlobalConstants } from '../common/constants';


@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  public static host = GlobalConstants.apiURL + GlobalConstants.port;

  constructor(private http: HttpClient) { }

  createNew(analysis: Analysis):Observable<String> {
    const headers = new HttpHeaders();
    return this.http.post<string>(GlobalConstants.apiURL + GlobalConstants.port + "/transaction/newAnalisysTransaction",
     analysis, {headers, withCredentials: true});
  }

  public getAnalysesDoctor (doctorPrivateKey): Observable<Analysis[]> {
    const headers = new HttpHeaders(); 
    var data = {"doctorPrivateKey" : doctorPrivateKey}
    return this.http.post<Analysis[]>(AnalysisService.host + '/blockchain/getAnalisesDoctor', data, 
    { headers, withCredentials: true }).pipe(
      map(therapies => {
          return therapies;
      }
     ));
  }

  public getAnalysesPatient (patientPublicKey): Observable<Analysis[]> {
    const headers = new HttpHeaders(); 
    var data = {"patientPublicKey" : patientPublicKey}
    return this.http.post<Analysis[]>(AnalysisService.host + '/blockchain/getAnalisesPatient', data, 
    { headers, withCredentials: true }).pipe(
      map(therapies => {
          return therapies;
      }
     ));
  }
}
