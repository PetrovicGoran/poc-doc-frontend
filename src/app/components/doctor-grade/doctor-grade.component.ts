import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { Transaction } from '../../models/transaction';
import { DoctorService } from '../../services/doctor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-doctor-grade',
  templateUrl: './doctor-grade.component.html',
  styleUrls: ['./doctor-grade.component.css']
})
export class DoctorGradeComponent implements OnInit {

  doctor:Doctor={_id:'',medical_number:'',password:'', full_name:'',
  specialization:'', phone:'', location:'', grading_points:0, grade:0, private_key: "", public_key: ''};
  loaderVisible:boolean = false;
  checkVisible:boolean = false;
  failed:boolean = false;

  tx:Transaction = {private_from: '', public_to: '', points: 0};

  constructor(private doctorService: DoctorService, private transactionService: TransactionService, private route: ActivatedRoute, private router: Router) { }

  getProfile(): void {
    this.doctorService.getDoctor(window.location.href.split( '/' )[4])
        .subscribe(doctor => {
          this.doctor = doctor;
          this.doctor.grade = 0; // <---- API CALL
        });

  }

  executeTransaction() {
    this.loaderVisible = true;
    this.failed = false;
    this.checkVisible = false;

    var currUser = JSON.parse(window.localStorage.getItem('currentUser'));
    this.tx.private_from = currUser.private_key;
    this.tx.public_to = this.doctor.public_key;

     this.transactionService.executeTransaction(this.tx.private_from, this.tx.public_to, this.tx.points).subscribe(val => {
      if(val === "success") {
        this.loaderVisible = false;
        this.checkVisible = true;
      }
    },
    error => {
      this.loaderVisible = false;
      this.failed = true;
    });

  }

  ngOnInit(): void {
    this.getProfile();
  }

}
