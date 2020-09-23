import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { Patient } from '../../models/patient';
import { DoctorService } from '../../services/doctor.service';


@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  patient:Patient = JSON.parse(window.localStorage.getItem('currentUser'));
  doctors:Doctor[];
  constructor(private doctorService: DoctorService) { }

  getDoctors(): void {
    this.doctorService.getDoctors()
      .subscribe(doctors => {this.doctors = doctors; console.log(doctors);});
  }

  ngOnInit(): void {
    this.getDoctors();
  }

}
