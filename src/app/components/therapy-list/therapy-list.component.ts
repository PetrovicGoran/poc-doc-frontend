import { Component, OnInit } from '@angular/core';
import { Therapy } from '../../models/therapy';
import { TherapyService } from '../../services/therapy.service';
import { Patient } from '../../models/patient';
import { Doctor } from '../../models/doctor';
import { PatientService } from '../../services/patient.service';
import { Diagnosis } from '../../models/diagnosis';
import { DiagnosisService } from '../../services/diagnosis.service';


@Component({
  selector: 'app-therapy-list',
  templateUrl: './therapy-list.component.html',
  styleUrls: ['./therapy-list.component.css']
})
export class TherapyListComponent implements OnInit {

  diagnosis: Diagnosis = { id: '', diagnosisName: '', diagnosisDescription: '', doctorPrivateKey: "", patientPublicKey: '' };

  doctor: Doctor = {
    _id: '', medical_number: '', password: '', full_name: '',
    specialization: '', phone: '', location: '', grading_points: 0, grade: 0, private_key: "", public_key: ''
  };
  patient: Patient = {
    _id: '', medical_number: '', password: '',
    full_name: '', phone: '', location: '', grading_points: 0, grade: 0, private_key: "", public_key: ''
  };

  therapies: Therapy[]
  constructor(private therapyService: TherapyService, private patientServise: PatientService, private diagnosisServise: DiagnosisService) { }

  getAllTherapies(): void {
    if (localStorage.getItem('mode') == 'patient') {
      this.patient = JSON.parse(window.localStorage.getItem('currentUser'));
      this.therapyService.getTherapiesPatient(this.patient.public_key).subscribe(therapies => {
        if (therapies != null && therapies.length > 0) {
          this.therapies = therapies;
          console.log(therapies);
        }else {
          console.log("This diagnosis does not has any therapies!");
        }
      },
        error => {
          window.alert("Error getting data");
          console.log(error);
        });
    } else {
      this.doctor = JSON.parse(window.localStorage.getItem('currentUser'));
      this.therapyService.getTherapiesDoctor(this.doctor.private_key).subscribe(therapies => {
        if (therapies != null && therapies.length > 0) {
          this.therapies = therapies;
          console.log(therapies);
        }else {
          console.log("This diagnosis does not has any therapies!");
        }
      },
        error => {
          window.alert("Error getting data");
          console.log(error);
        });
    }

  }

  ngOnInit(): void {
    var patientId = window.location.href.split('/')[4];
    if (patientId != null && patientId != "") {
      this.patientServise.getPatient(patientId)
        .subscribe(patient => {
          this.patient = patient;
          this.therapyService.getTherapiesPatient(this.patient.public_key).subscribe(therapies => {
            if (therapies != null && therapies.length > 0) {
              this.therapies = therapies;
              console.log("patient personal " + therapies);
            }else {
              console.log("This diagnosis does not has any therapies!");
            }
          },
            error => {
              window.alert("Error getting data");
              console.log(error);
            });
        });
    } else {
      this.getAllTherapies();
    }

  }

}
