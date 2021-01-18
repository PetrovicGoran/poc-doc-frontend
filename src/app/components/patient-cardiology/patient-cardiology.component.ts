import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { Patient } from '../../models/patient';
import { Measurement } from '../../models/measurement';
import { PatientService } from '../../services/patient.service';
import { CardiologyService } from '../../services/cardiology.service'
import { Router, ActivatedRoute } from '@angular/router';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

@Component({
  selector: 'app-patient-cardiology',
  templateUrl: './patient-cardiology.component.html',
  styleUrls: ['./patient-cardiology.component.css']
})
export class PatientCardiologyComponent implements OnInit {

  measures:Measurement[];
  patient: Patient = {
    _id: '', medical_number: '', password: '',
    full_name: '', phone: '', location: '', grading_points: 0, grade: 0, private_key: "", public_key: ''
  };

  constructor(private cardiologyService: CardiologyService, private patientServise: PatientService,
    private route: ActivatedRoute, private router: Router) { }

    getMeasureData(): void {
      var patientId = window.location.href.split('/')[4];
      console.log(patientId);
      this.patientServise.getPatient(patientId)
      .subscribe(patient => {
        this.patient = patient;
        console.log(patient.private_key);
        this.cardiologyService.getAllMeasurementsPatient(this.patient.private_key)
        .subscribe(measures => {
          if (measures != null) {
            this.measures = measures;
            console.log(measures);
          }
        },
          error => {
            window.alert("Error getting data");
            console.log(error);
          });
      });
    }

  ngOnInit(): void {
    this.getMeasureData();
    
  }

}
