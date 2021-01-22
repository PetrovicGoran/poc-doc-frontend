import { Component, OnInit } from '@angular/core';
import { Patient } from '../../models/patient';
import { Doctor } from '../../models/doctor';
import { PatientService } from '../../services/patient.service';


@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {

  doctor:Doctor = JSON.parse(window.localStorage.getItem('currentUser'));
  
  patient: Patient = {
    _id: '', medical_number: '', password: '',
    full_name: '', phone: '', location: '', grading_points: 0, grade: 0, private_key: "", public_key: ''
  };

  constructor(private patientServise : PatientService) { }

  getPatient() : void {
    this.patientServise.getPatient(window.location.href.split('/')[4]).subscribe(patient => {
      this.patient = patient;
    },
      error => {
        window.alert("Error getting data");
        console.log(error);
      });
  }

  isPatient() {
    if (localStorage.getItem('mode') == 'patient'){
      this.patient = JSON.parse(window.localStorage.getItem('currentUser'));
      return true;
    }
    return false;
  }

  isLoggedIn() {

    if (localStorage.getItem('currentUser') != null) {
      //console.log("logged in");
      return true;
    }
    else {
      //console.log("logged out");
      return false;
    }
  }
  


  ngOnInit(): void {
    this.getPatient();
  }

}
