import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { DoctorService } from '../../services/doctor.service';


@Component({
  selector: 'app-home-doctor',
  templateUrl: './home-doctor.component.html',
  styleUrls: ['./home-doctor.component.css']
})
export class HomeDoctorComponent implements OnInit {

  doctor:Doctor={_id:'',medical_number:'',password:'', full_name:'',
  specialization:'', phone:'', location:'', grading_points:0, grade:0, private_key: '', public_key: ''};

  constructor(private doctorService:DoctorService) { }

  getProfile(): void {
    this.doctor = JSON.parse(window.localStorage.getItem('currentUser'));
     this.doctorService.getDoctor(this.doctor._id)
         .subscribe(doctor => {
           this.doctor = doctor;
           this.doctor.grade = 0; // <---- API CALL
         });
   }


  ngOnInit(): void {
    this.getProfile();
  }

}
