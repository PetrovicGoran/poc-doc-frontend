import { Component, OnInit } from '@angular/core';
import { Patient } from '../../models/patient';
import { Doctor } from '../../models/doctor';
import { Prediction } from '../../models/prediction';
import { PatientService } from '../../services/patient.service';
import { DoctorService } from '../../services/doctor.service';
import { PredictionService } from 'src/app/services/prediction.service';


@Component({
  selector: 'app-pending-list',
  templateUrl: './pending-list.component.html',
  styleUrls: ['./pending-list.component.css']
})
export class PendingListComponent implements OnInit {

  doctor: Doctor = {
    _id: '', medical_number: '', password: '', full_name: '',
    specialization: '', phone: '', location: '', grading_points: 0, grade: 0, private_key: "", public_key: ''
  };
  patient: Patient = {
    _id: '', medical_number: '', password: '',
    full_name: '', phone: '', location: '', grading_points: 0, grade: 0, private_key: "", public_key: ''
  };

  pendings: Prediction[];
  constructor(private predictionService: PredictionService) { }

  getPendings(): void {
    if (window.location.href.split('/')[4] == 'patient') {
      this.predictionService.getPredictionsPatient(window.location.href.split('/')[5]).subscribe(pendings => {
        if (pendings != null && pendings.length > 0) {
          this.pendings = pendings;
          console.log(pendings);
        } else {
          console.log("This patient doesn't have any pendings!");
        }
      },
        error => {
          window.alert("Error getting data");
          console.log(error);
        });
    } else if(window.location.href.split('/')[4] == 'doctor') {
      this.predictionService.getPredictionsDoctor(window.location.href.split('/')[5]).subscribe(pendings => {
        if (pendings != null && pendings.length > 0) {
          this.pendings = pendings;
          console.log(pendings);
        } else {
          console.log("This doctor doesn't have any pendings!");
        }
      },
        error => {
          window.alert("Error getting data");
          console.log(error);
        });
    }else{
      console.log("ERROR!")
    }

  }

  ngOnInit(): void {

    this.getPendings();

  }


}
