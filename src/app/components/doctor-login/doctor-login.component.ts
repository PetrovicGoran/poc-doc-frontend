import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { DoctorService } from '../../services/doctor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {

  doctor:Doctor={_id:'',medical_number:'',password:'', full_name:'',
  specialization:'', phone:'', location:'', grading_points:0, grade:0, private_key: "", public_key: ''};

  constructor(private doctorService: DoctorService, private route: ActivatedRoute, private router: Router) { }

  tryLogin(): void {
    this.doctorService.login(this.doctor).subscribe(doctor => {
      this.route.queryParams.subscribe(
        params => {this.router.navigate([params['returnUrl']||'home-doctor']);
        });
    }
    );
  }

  ngOnInit() {
  }

}
