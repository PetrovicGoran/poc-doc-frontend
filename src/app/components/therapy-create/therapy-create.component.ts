import { Component, OnInit } from '@angular/core';
import { Therapy } from '../../models/therapy';
import { TherapyService } from '../../services/therapy.service';
import { Doctor } from '../../models/doctor';
import { Patient } from '../../models/patient';
import { PatientService } from '../../services/patient.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-therapy-create',
  templateUrl: './therapy-create.component.html',
  styleUrls: ['./therapy-create.component.css']
})
export class TherapyCreateComponent implements OnInit {

  therapy:Therapy={id:'', therapyName:'', therapyDescription:'', therapyStartDate:'', therapyEndDate:'', 
  therapyRepetition:0, doctorPrivateKey: "", patientPublicKey: '', diagnosisId:''};
  doctor: Doctor = {
    _id: '', medical_number: '', password: '', full_name: '',
    specialization: '', phone: '', location: '', grading_points: 0, grade: 0, private_key: "", public_key: ''
  };
  patient: Patient = {
    _id: '', medical_number: '', password: '',
    full_name: '', phone: '', location: '', grading_points: 0, grade: 0, private_key: "", public_key: ''
  };

  constructor(private therapyService: TherapyService, private patientServise: PatientService,
     private route: ActivatedRoute, private router: Router) { }

  createTherapy () : void {
     var patientId = window.location.href.split('/')[4];
     var diagnosisId = window.location.href.split('/')[5];
     this.doctor = JSON.parse(window.localStorage.getItem('currentUser'));
    this.patientServise.getPatient(patientId)
      .subscribe(patient => {
        this.patient = patient;
        this.therapy.patientPublicKey = this.patient.public_key;
        this.therapy.doctorPrivateKey = this.doctor.private_key;
        this.therapy.diagnosisId = diagnosisId;
        this.therapyService.createNew(this.therapy).subscribe(val => {
          if (val != null && val != "null") {
            this.route.queryParams.subscribe(
              params => {
                this.router.navigate([params['returnUrl'] || 'patient-list']);
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
