import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Prediction } from '../models/prediction';
import{ GlobalConstants } from '../common/constants';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  public static host = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  public getPredictionsDoctor (doctor_id): Observable<Prediction[]> {
    return this.http.get<Prediction[]>(PredictionService.host + 'prediction/doctor/' + doctor_id);
  }

  public getPredictionsPatient (patient_id): Observable<Prediction[]> {
    return this.http.get<Prediction[]>(PredictionService.host + 'prediction/user/' + patient_id);
  }

  public getPrediction (prediction_id): Observable<Prediction> {
    return this.http.get<Prediction>(PredictionService.host + 'prediction/' + prediction_id);
  }

  public updatePrediction(prediction):Observable<Prediction> {
    const headers = new HttpHeaders();
    return this.http.put<Prediction>(PredictionService.host + 'prediction/' + prediction._id, prediction,
    { headers, withCredentials: true }).pipe(
      map(prediction => {
        if (prediction) {
          console.log(JSON.stringify(prediction));
        }
        return prediction;
      }
    ));
  }

  public deletePrediction(prediction_id): Observable<string> {
    return this.http.delete<string>(PredictionService.host + 'prediction/' + prediction_id);
  }

}
