import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { DoctorService } from '../../services/doctor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  doctor:Doctor={_id:'',medical_number:'',password:'', full_name:'',
  specialization:'', phone:'', location:'', grading_points:0, grade:0, private_key: "", public_key: ''};

  constructor(private doctorService: DoctorService) { }

  getProfile(): void {
   this.doctor = JSON.parse(window.localStorage.getItem('currentUser'));
    this.doctorService.getDoctor(this.doctor._id)
        .subscribe(doctor => {
          this.doctor = doctor;
          //this.doctor.grade = 0; // <---- API CALL
          //this.doctor.grading_points = 0; // <---- API CALL

          this.doctorService.getGradingPoints(this.doctor.private_key).subscribe((val) => {
            this.doctor.grading_points = val;
          });
        });

  }

  ngOnInit(): void {
    this.getProfile();
  }

}
