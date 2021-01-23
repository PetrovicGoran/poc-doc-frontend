import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { Patient } from '../../models/patient';
import { PatientService } from '../../services/patient.service';
import { DoctorService } from '../../services/doctor.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AnalysisService } from 'src/app/services/analysis.service';
import { Analysis } from '../../models/analysis';


@Component({
  selector: 'app-analysis-show',
  templateUrl: './analysis-show.component.html',
  styleUrls: ['./analysis-show.component.css']
})
export class AnalysisShowComponent implements OnInit {

  doctor: Doctor = {
    _id: '', medical_number: '', password: '', full_name: '',
    specialization: '', phone: '', location: '', grading_points: 0, grade: 0, private_key: "", public_key: ''
  };
  patient: Patient = {
    _id: '', medical_number: '', password: '',
    full_name: '', phone: '', location: '', grading_points: 0, grade: 0, private_key: "", public_key: ''
  };

  imageSource;

  constructor(private sanitizer: DomSanitizer, private patientServise: PatientService,
    private doctorService: DoctorService, private analysisService: AnalysisService) { }


// getAnalysis and see if it's for patient or doctor


  ngOnInit(): void {
  }

}
