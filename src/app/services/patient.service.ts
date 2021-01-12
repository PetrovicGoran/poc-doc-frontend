import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Patient } from '../models/patient';
import { Router, ActivatedRoute } from '@angular/router';
import{ GlobalConstants } from '../common/constants';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  public static host = 'http://localhost:3000/';

  constructor(private http: HttpClient,private route: ActivatedRoute, private router: Router) { }

  login(patient:Patient): Observable<Patient> {
    const headers = new HttpHeaders();

       return this.http.post<Patient>(PatientService.host+'patients/login', patient,
       { headers, withCredentials: true }).pipe(
           map(patient => {
               if (patient) {
                  localStorage.setItem('currentUser', JSON.stringify(patient));
               }
               return patient;
           }
          )
        );
   }

   logout() {
       localStorage.removeItem('currentUser');
   }

   register(patient: Patient):Observable<Patient> {
    const headers = new HttpHeaders();

    return this.http.post<Patient>(PatientService.host+'patients/', patient, {
      headers, withCredentials: true}).pipe(
        map(patient => {
          if (patient) {
            console.log(JSON.stringify(patient));
          }
          return patient;
        }
      )
    );
  }

  getPatient(patientId):Observable<Patient> {
    return this.http.get<Patient>(PatientService.host +'patients/'
    + patientId);
  }

  public getPatients (): Observable<Patient[]> {
    return this.http.get<Patient[]>(PatientService.host +'patients/');
  }

  getGradingPoints(privateKey) : Observable<number> {
    const headers = new HttpHeaders();

    const sendData = JSON.stringify({"prk": privateKey});

    return this.http.post<number>(GlobalConstants.apiURL + GlobalConstants.port + "/wallet/balance", {"prk": privateKey}, {headers, withCredentials: true});
      /*.subscribe((val) => {
        return val;
      },
      response => {
          console.log("POST call in error", response);
      }
      );*/

    //console.log(test);
    /*() => {
        console.log("The POST observable is now completed.");
    });*/
    //.map().catch(err => {console.log(err)});



  //);



    // pipe(num => {console.log(JSON.stringify(num, null, "\t")); return num});
    /*map(numb => {
        console.log(numb.toString());
        return numb;
      }).catch(this.handleErrorObservable);*/

    //console.log(JSON.stringify(test, null, "\t"));
    //return new Observable<number>();

    //return 0;
  }

}
