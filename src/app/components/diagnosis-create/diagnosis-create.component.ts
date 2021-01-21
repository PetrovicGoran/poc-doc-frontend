import { Component, OnInit } from '@angular/core';
import { Diagnosis } from '../../models/diagnosis';
import { DiagnosisService } from '../../services/diagnosis.service';
import { Doctor } from '../../models/doctor';
import { Patient } from '../../models/patient';
import { PatientService } from '../../services/patient.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-diagnosis-create',
  templateUrl: './diagnosis-create.component.html',
  styleUrls: ['./diagnosis-create.component.css']
})
export class DiagnosisCreateComponent implements OnInit {

  diagnosis: Diagnosis = { id: '', diagnosisName: '', diagnosisDescription: '', doctorPrivateKey: "",
   patientPublicKey: '', userId : '' };
  doctor: Doctor = {
    _id: '', medical_number: '', password: '', full_name: '',
    specialization: '', phone: '', location: '', grading_points: 0, grade: 0, private_key: "", public_key: ''
  };
  patient: Patient = {
    _id: '', medical_number: '', password: '',
    full_name: '', phone: '', location: '', grading_points: 0, grade: 0, private_key: "", public_key: ''
  };

  constructor(private diagnosisService: DiagnosisService, private patientServise: PatientService,
    private route: ActivatedRoute, private router: Router) { }

  createDiagnosis() {

    var patientId = window.location.href.split('/')[4];
    this.doctor = JSON.parse(window.localStorage.getItem('currentUser'));
    this.patientServise.getPatient(patientId)
      .subscribe(patient => {
        this.patient = patient;
        this.diagnosis.patientPublicKey = this.patient.public_key;
        this.diagnosis.doctorPrivateKey = this.doctor.private_key;
        this.diagnosisService.createNew(this.diagnosis).subscribe(val => {
          if (val != null && val != "null") {
            this.route.queryParams.subscribe(
              params => {
                this.router.navigate([params['returnUrl'] || 'therapy-create/' +  this.patient._id + '/' + val]);
              });
          }
        },
          error => {
            window.alert("Error creating diagnosis");
            console.log(error);
          });
      });

  }


  ngOnInit(): void {
  }

}
