import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { Patient } from '../../models/patient';
import { PatientService } from '../../services/patient.service';
import { DoctorService } from '../../services/doctor.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AnalysisService } from 'src/app/services/analysis.service';
import { Analysis } from '../../models/analysis';

@Component({
  selector: 'app-analyses-list',
  templateUrl: './analyses-list.component.html',
  styleUrls: ['./analyses-list.component.css']
})
export class AnalysesListComponent implements OnInit {

  doctor: Doctor = {
    _id: '', medical_number: '', password: '', full_name: '',
    specialization: '', phone: '', location: '', grading_points: 0, grade: 0, private_key: "", public_key: ''
  };
  patient: Patient = {
    _id: '', medical_number: '', password: '',
    full_name: '', phone: '', location: '', grading_points: 0, grade: 0, private_key: "", public_key: ''
  };

  analyses: Analysis[];

  constructor(private sanitizer: DomSanitizer, private patientServise: PatientService,
    private doctorService: DoctorService, private analysisService: AnalysisService) { }


  getAnalyses(): void {
    if (window.location.href.split('/')[4] == 'patient') {
      this.patientServise.getPatient(window.location.href.split('/')[5])
      .subscribe(patient => {
        console.log(this.patient);
        this.patient = patient;
        this.analysisService.getAnalysesPatient(this.patient.public_key).subscribe(analyses => {
          if (analyses != null && analyses.length > 0) {
            this.analyses = analyses;
            console.log(analyses);
          } else {
            console.log("This patient doesn't have any analyses!");
          }
        },
          error => {
            window.alert("Error getting data");
            console.log(error);
          });
      });
     
    } else if (window.location.href.split('/')[4] == 'doctor') {
      this.doctorService.getDoctor(window.location.href.split('/')[5])
      .subscribe(doctor => {
        console.log(this.doctor);
        this.doctor = doctor;
        this.analysisService.getAnalysesDoctor(this.doctor.private_key).subscribe(analyses => {
          if (analyses != null && analyses.length > 0) {
            this.analyses = analyses;
            console.log(analyses);
          } else {
            console.log("This doctor doesn't have any pendings!");
          }
        },
          error => {
            window.alert("Error getting data");
            console.log(error);
          });
      });
      
    } else {
      console.log("ERROR!")
    }
  }

  ngOnInit(): void {
    this.getAnalyses();
  }

}
