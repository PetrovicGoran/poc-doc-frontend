import { Component, OnInit } from '@angular/core';
import { Patient } from '../../models/patient';
import { Transaction } from '../../models/transaction';
import { PatientService } from '../../services/patient.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-patient-grade',
  templateUrl: './patient-grade.component.html',
  styleUrls: ['./patient-grade.component.css']
})
export class PatientGradeComponent implements OnInit {

  patient:Patient={_id:'',medical_number:'',password:'',
  full_name:'', phone:'', location:'', grading_points:0, grade:0, private_key: "", public_key: ''};
  loaderVisible:boolean = false;
  checkVisible:boolean = false;
  failed:boolean = false;

  tx:Transaction = {private_from: '', public_to: '', points: 0};

  constructor(private patientService: PatientService, private transactionService: TransactionService, private route: ActivatedRoute, private router: Router) { }

  getProfile(): void {
    this.patientService.getPatient(window.location.href.split( '/' )[4])
        .subscribe(patient => {
          this.patient = patient;
          this.patient.grade = 0; // <---- API CALL
        });

  }

  executeTransaction() {
    this.loaderVisible = true;
    this.failed = false;
    this.checkVisible = false;

    var currUser = JSON.parse(window.localStorage.getItem('currentUser'));
    this.tx.private_from = currUser.private_key;
    this.tx.public_to = this.patient.public_key;

     this.transactionService.executeTransaction(this.tx.private_from, this.tx.public_to, this.tx.points).subscribe((val) => {
        if(val === "success") {
          this.loaderVisible = false;
          this.checkVisible = true;
        }
      },
      error => {
        this.loaderVisible = false;
        this.failed = true;
      }
    );

    console.log("tx info: " + JSON.stringify(this.tx));

  }

  ngOnInit(): void {
    this.getProfile();
  }

}











