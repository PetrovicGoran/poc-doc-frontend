import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { DoctorService } from '../../services/doctor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.css']
})
export class DoctorRegisterComponent implements OnInit {

  doctor:Doctor={_id:'',medical_number:'',password:'', full_name:'',
  specialization:'', phone:'', location:'', grading_points:0, grade:0, private_key: "", public_key: ''};

  constructor(private doctorService: DoctorService, private route: ActivatedRoute, private router: Router) { }

  tryRegister () : void {
    this.doctorService.register(this.doctor).subscribe(doctor => {
      this.route.queryParams.subscribe(
          params => {this.router.navigate([params['returnUrl']||'doctor-login']);
        });
      }
    );
  }

  ngOnInit(): void {
  }


}
