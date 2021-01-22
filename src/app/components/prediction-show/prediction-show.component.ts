import { Component, OnInit } from '@angular/core';
import { Prediction } from '../../models/prediction';
import { PredictionService } from 'src/app/services/prediction.service';
import { Diagnosis } from '../../models/diagnosis';
import { DiagnosisService } from '../../services/diagnosis.service';
import { Doctor } from '../../models/doctor';
import { Patient } from '../../models/patient';
import { PatientService } from '../../services/patient.service';
import { DoctorService } from '../../services/doctor.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { AnalysisService } from 'src/app/services/analysis.service';
import { Analysis } from '../../models/analysis';

@Component({
  selector: 'app-prediction-show',
  templateUrl: './prediction-show.component.html',
  styleUrls: ['./prediction-show.component.css']
})
export class PredictionShowComponent implements OnInit {

  prediction: Prediction = { _id: '', prediction: '', date: '', image: '', confirmed: false, user_id: '', doctor_id: '' };
  patient: Patient = {
    _id: '', medical_number: '', password: '',
    full_name: '', phone: '', location: '', grading_points: 0, grade: 0, private_key: "", public_key: ''
  };
  doctor: Doctor = {
    _id: '', medical_number: '', password: '', full_name: '',
    specialization: '', phone: '', location: '', grading_points: 0, grade: 0, private_key: "", public_key: ''
  };
  diagnosis: Diagnosis = {
    id: '', diagnosisName: '', diagnosisDescription: '', doctorPrivateKey: "",
    patientPublicKey: '', userId: ''
  };
  analysis: Analysis = {
    id: '', analisysTitle: '', analisysDescription: '', doctorPrivateKey: '',
    patientPublicKey: '', diagnosisId: '', analisysBase64AsciiImageString: ''
  };

  isPatient: boolean = window.localStorage.getItem('mode') == 'patient' ? true : false;

  imageSource;

  confirm: boolean = true;

  constructor(private predictionService: PredictionService, private sanitizer: DomSanitizer,
    private diagnosisService: DiagnosisService, private patientServise: PatientService,
    private route: ActivatedRoute, private router: Router, private doctorService: DoctorService, private analysisService: AnalysisService) { }

  getPrediction(): void {
    this.predictionService.getPrediction(window.location.href.split('/')[4])
      .subscribe(prediction => {
        this.prediction = prediction;
        this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${this.prediction.image}`);
        this.getProfileDoctor();
        this.getProfilePatient();
      },
        error => {
          window.alert("Error getting data");
          console.log(error);
        });
  }

  getProfilePatient(): void {
    this.patientServise.getPatient(this.prediction.user_id)
      .subscribe(patient => {
        console.log(this.patient);
        this.patient = patient;
      });
  }

  getProfileDoctor(): void {
    this.doctorService.getDoctor(this.prediction.doctor_id)
      .subscribe(doctor => {
        console.log(this.doctor);
        this.doctor = doctor;
      });

  }

  onConfirm() {
    this.confirm = true;
    this.diagnosis.diagnosisName = this.prediction.prediction;
    this.diagnosis.diagnosisDescription = "Analysis by AI : " + this.prediction.prediction;
    this.diagnosis.doctorPrivateKey = this.doctor.private_key;
    this.diagnosis.patientPublicKey = this.patient.public_key;
    this.diagnosis.userId = this.patient._id;
    this.diagnosisService.createNew(this.diagnosis).subscribe(diagnosisId => {
      if (diagnosisId != null && diagnosisId != "null") {
        this.analysis.patientPublicKey = this.patient.public_key;
        this.analysis.doctorPrivateKey = this.doctor.private_key;
        this.analysis.diagnosisId = diagnosisId;
        this.analysis.analisysTitle = this.prediction.prediction;
        this.analysis.analisysDescription = this.diagnosis.diagnosisDescription;
        this.analysis.analisysBase64AsciiImageString = this.prediction.image;
        this.analysisService.createNew(this.analysis).subscribe(val => {
          if (val != null && val != "null") {
            this.predictionService.deletePrediction(this.prediction._id).subscribe(response => {
              this.route.queryParams.subscribe(
                params => {
                  this.router.navigate([params['returnUrl'] || 'therapy-create/' + this.patient._id + '/' + diagnosisId]);
                });
            });
          }
        },
          error => {
            window.alert("Error creating analysis");
            console.log(error);
          });
      }
    },
      error => {
        window.alert("Error creating diagnosis");
        console.log(error);
      });
  }

  onDeny() {
    this.confirm = false;
  }

  ngOnInit(): void {
    this.getPrediction();
  }

}
