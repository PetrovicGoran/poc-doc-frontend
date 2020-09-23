import { Component, OnInit } from '@angular/core';
import { Patient } from '../../models/patient';
import { PatientService } from '../../services/patient.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent implements OnInit {

  patient:Patient={_id:'',medical_number:'',password:'', full_name:'',
  phone:'', location:'', grading_points:0, grade:0, private_key: "", public_key: ''};

  constructor(private patientService: PatientService, private route: ActivatedRoute, private router: Router) { }

  tryRegister () : void {
    this.patientService.register(this.patient).subscribe(patient => {
      this.route.queryParams.subscribe(
          params => {this.router.navigate([params['returnUrl']||'patient-login']);
        });
      }
    );
  }

  ngOnInit(): void {
  }


}
