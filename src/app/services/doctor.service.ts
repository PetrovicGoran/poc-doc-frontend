import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Doctor } from '../models/doctor';
import{ GlobalConstants } from '../common/constants';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  public static host = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  login(doctor:Doctor): Observable<Doctor> {
    const headers = new HttpHeaders();

       return this.http.post<Doctor>(DoctorService.host+'doctors/login', doctor,
       { headers, withCredentials: true }).pipe(
           map(doctor => {
               if (doctor) {
                  localStorage.setItem('currentUser', JSON.stringify(doctor));
               }
               return doctor;
           }
          )
        );
   }

   logout() {
       localStorage.removeItem('currentUser');
   }

   register(doctor: Doctor):Observable<Doctor> {
    const headers = new HttpHeaders();

    return this.http.post<Doctor>(DoctorService.host+'doctors/', doctor, {
      headers, withCredentials: true}).pipe(
        map(doctor => {
          if (doctor) {
            console.log(JSON.stringify(doctor));
          }
          return doctor;
        }
      )
    );
  }

  public getDoctor (doctorId): Observable<Doctor> {
    return this.http.get<Doctor>(DoctorService.host +'doctors/'
    + doctorId);
  }

  public getDoctors (): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(DoctorService.host +'doctors/');
  }

  getGradingPoints(privateKey) : Observable<number> {
    const headers = new HttpHeaders();

    const sendData = JSON.stringify({"prk": privateKey});

    return this.http.post<number>(GlobalConstants.apiURL + GlobalConstants.port + "/wallet/balance", {"prk": privateKey}, {headers, withCredentials: true});

  }
}
