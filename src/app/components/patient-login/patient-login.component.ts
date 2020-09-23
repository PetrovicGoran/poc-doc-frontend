import { Component, OnInit } from '@angular/core';
import { Patient } from '../../models/patient';
import { PatientService } from '../../services/patient.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})

export class PatientLoginComponent implements OnInit {

  patient:Patient={_id:'',medical_number:'',password:'',
  full_name:'', phone:'', location:'', grading_points:0, grade:0, private_key: "", public_key: ''};
  constructor(private patientServise: PatientService, private route: ActivatedRoute, private router: Router) { }

  tryLogin(): void {
    this.patientServise.login(this.patient).subscribe(patient => {
      this.route.queryParams.subscribe(
        params => {this.router.navigate([params['returnUrl']||'home']);
        });
    }
    );
  }

  ngOnInit() {
  }

}
