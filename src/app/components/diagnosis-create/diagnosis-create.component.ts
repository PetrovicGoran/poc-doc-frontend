import { Component, OnInit, Input } from '@angular/core';
import { Diagnosis } from '../../models/diagnosis';
import { DiagnosisService } from '../../services/diagnosis.service';
import { Doctor } from '../../models/doctor';
import { Patient } from '../../models/patient';
import { PatientService } from '../../services/patient.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AnalysisService } from 'src/app/services/analysis.service';
import { Analysis } from '../../models/analysis';
import { Prediction } from '../../models/prediction';
import { PredictionService } from 'src/app/services/prediction.service';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-diagnosis-create',
  templateUrl: './diagnosis-create.component.html',
  styleUrls: ['./diagnosis-create.component.css']
})
export class DiagnosisCreateComponent implements OnInit {

  @Input() prediction: Prediction;

  diagnosis: Diagnosis = {
    id: '', diagnosisName: '', diagnosisDescription: '', doctorPrivateKey: "",
    patientPublicKey: '', userId: ''
  };
  doctor: Doctor = {
    _id: '', medical_number: '', password: '', full_name: '',
    specialization: '', phone: '', location: '', grading_points: 0, grade: 0, private_key: "", public_key: ''
  };
  patient: Patient = {
    _id: '', medical_number: '', password: '',
    full_name: '', phone: '', location: '', grading_points: 0, grade: 0, private_key: "", public_key: ''
  };
  analysis: Analysis = {
    id: '', analisysTitle: '', analisysDescription: '', doctorPrivateKey: '',
    patientPublicKey: '', diagnosisId: '', analisysBase64AsciiImageString: ''
  };

  constructor(private diagnosisService: DiagnosisService, private patientServise: PatientService,
    private route: ActivatedRoute, private router: Router, private predictionService: PredictionService, 
    private analysisService: AnalysisService) { }

  createDiagnosis() {
    var patientId;
    if(this.prediction!= null) {
      patientId = this.prediction.user_id;
    } else {
      patientId = window.location.href.split('/')[4];
    }
    this.doctor = JSON.parse(window.localStorage.getItem('currentUser'));
    this.patientServise.getPatient(patientId)
      .subscribe(patient => {
        this.patient = patient;
        this.diagnosis.patientPublicKey = this.patient.public_key;
        this.diagnosis.doctorPrivateKey = this.doctor.private_key;
        this.diagnosisService.createNew(this.diagnosis).subscribe(diagnosisId => {
          if (diagnosisId != null && diagnosisId != "null") {
            if (this.prediction != null) {
              this.analysis.patientPublicKey = this.patient.public_key;
              this.analysis.doctorPrivateKey = this.doctor.private_key;
              this.analysis.diagnosisId = diagnosisId;
              this.analysis.analisysTitle = this.diagnosis.diagnosisName;
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
            } else {
              this.route.queryParams.subscribe(
                params => {
                  this.router.navigate([params['returnUrl'] || 'therapy-create/' + this.patient._id + '/' + diagnosisId]);
                });
            }

          }
        },
          error => {
            window.alert("Error creating diagnosis");
            console.log(error);
          });
      });

  }


  ngOnInit(): void {
    console.log(this.prediction);
  }

}
