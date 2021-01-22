import { Component, OnInit } from '@angular/core';
import { Prediction } from '../../models/prediction';
import { PredictionService } from 'src/app/services/prediction.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-prediction-show',
  templateUrl: './prediction-show.component.html',
  styleUrls: ['./prediction-show.component.css']
})
export class PredictionShowComponent implements OnInit {

  prediction: Prediction = { _id: '', prediction: '', date: '', image: '', confirmed: false, user_id: '', doctor_id: '' };

  isPatient: boolean = window.localStorage.getItem('mode') == 'patient' ? true : false;

  imageSource;

  confirm: boolean = true;

  constructor(private predictionService: PredictionService, private sanitizer: DomSanitizer) { }

  getPending(): void {
    this.predictionService.getPrediction(window.location.href.split('/')[4])
      .subscribe(prediction => {
        this.prediction = prediction;
        this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${this.prediction.image}`);
      },
        error => {
          window.alert("Error getting data");
          console.log(error);
        });
  }

  setConfirmValue(): void {
    this.confirm = !this.confirm;
  }
  ngOnInit(): void {
    this.getPending();
  }

}
