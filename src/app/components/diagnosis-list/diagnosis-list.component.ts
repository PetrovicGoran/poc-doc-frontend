import { Component, OnInit } from '@angular/core';
import { Diagnosis } from '../../models/diagnosis';
import { Patient } from '../../models/patient';
import { Doctor } from '../../models/doctor';
import { DiagnosisService } from '../../services/diagnosis.service';

@Component({
  selector: 'app-diagnosis-list',
  templateUrl: './diagnosis-list.component.html',
  styleUrls: ['./diagnosis-list.component.css']
})
export class DiagnosisListComponent implements OnInit {

  // doctor:Doctor = JSON.parse(window.localStorage.getItem('currentUser'));
  patient:Patient = JSON.parse(window.localStorage.getItem('currentUser'));
  diagnoses:Diagnosis[]
  constructor(private diagnosisServise: DiagnosisService) { }

  getAllDiagnosis(): void {
    this.diagnosisServise.getAllDiagnosis()
      .subscribe(diagnoses => this.diagnoses = diagnoses);
  }

  ngOnInit(): void {
    this.getAllDiagnosis();
  }

}
