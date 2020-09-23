import { Component, OnInit } from '@angular/core';
import { Patient } from '../../models/patient';
import { PatientService } from '../../services/patient.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

  patient:Patient={_id:'',medical_number:'',password:'',
  full_name:'', phone:'', location:'', grading_points:0, grade:0, private_key: "", public_key: ''};
  constructor(private patientServise: PatientService, private route: ActivatedRoute, private router: Router) { }

  getProfile(): void {
    var patient = JSON.parse(window.localStorage.getItem('currentUser'));
    this.patientServise.getPatient(patient._id)
        .subscribe(patient => {
          this.patient = patient;
          
          this.patientServise.getGradingPoints(this.patient.private_key).subscribe((val) => {
            this.patient.grading_points = val;
          });
          
          
          // <---- API CALL FOR POINTS / STANJE V DENARNICI
          //this.patient.grade = 0; // <---- API CALL FOR GRADE
        });
  }

  ngOnInit(): void {
    this.getProfile();
  }

}
