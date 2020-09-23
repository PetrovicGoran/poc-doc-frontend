import { Component, OnInit } from '@angular/core';
import { Patient } from '../../models/patient';
import { Doctor } from '../../models/doctor';
import { PatientService } from '../../services/patient.service';


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  doctor:Doctor = JSON.parse(window.localStorage.getItem('currentUser'));
  patients:Patient[];
  constructor(private patientServise: PatientService) { }

  getPatients(): void {
    this.patientServise.getPatients()
      .subscribe(patients => this.patients = patients);
  }

  ngOnInit(): void {
    this.getPatients();
  }

}
