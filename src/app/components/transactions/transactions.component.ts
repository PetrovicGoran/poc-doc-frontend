import { Component, OnInit } from '@angular/core';
import { MyTransaction } from '../../models/my-transaction';
import { TransactionService } from '../../services/transaction.service';
import { Patient } from '../../models/patient';
import { PatientService } from '../../services/patient.service';
import { Doctor } from '../../models/doctor';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})

export class TransactionsComponent implements OnInit {

  transactions: Array<MyTransaction>; //this is for storing list of transactions from API,
  //be sure to change in html name of list !!!!
  myTransactions: MyTransaction[];

  constructor(private transactionService:TransactionService, private patientService: PatientService, private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.readMyTransactions();
  }

  readMyTransactions() : void {
    var currUser = JSON.parse(window.localStorage.getItem('currentUser'));

    this.transactionService.listMyTransactions(currUser.private_key).subscribe((val) => {
      this.myTransactions = val;

      var patients: Patient[];
      var doctors: Doctor[];

      for(var i: number = 0; i < this.myTransactions.length; i++) {
        this.myTransactions[i].fullname_sender = "";
        this.myTransactions[i].fullname_reciever = "";
      }

      this.patientService.getPatients().subscribe((res) => {
        patients = res;

        for(var i: number = 0; i < this.myTransactions.length; i++) {
          
            var countEmpty: number = 0;

            if(this.myTransactions[i].fullname_reciever == "") 
              countEmpty++;
              
            if(this.myTransactions[i].fullname_sender == "")
              countEmpty++;

            if(countEmpty) {

              for(var j: number = 0; j < patients.length; j++) {

                if(this.myTransactions[i].public_sender === patients[j].public_key) {
                  this.myTransactions[i].fullname_sender = patients[j].full_name;
                  countEmpty--;
                }

                if(this.myTransactions[i].public_reciever === patients[j].public_key) {
                  this.myTransactions[i].fullname_reciever = patients[j].full_name;
                  countEmpty--;
                }

                if(!countEmpty)
                  break;
              }
            }
        }

        this.doctorService.getDoctors().subscribe((resp) => {
          doctors = resp;

          for(var i: number = 0; i < this.myTransactions.length; i++) {
          
              var countEmpty: number = 0;
  
              if(this.myTransactions[i].fullname_reciever == "") 
                countEmpty++;
                
              if(this.myTransactions[i].fullname_sender == "")
                countEmpty++;
  
              if(countEmpty) {
  
                for(var j: number = 0; j < doctors.length; j++) {
  
                  if(this.myTransactions[i].public_sender === doctors[j].public_key) {
                    this.myTransactions[i].fullname_sender = doctors[j].full_name;
                    countEmpty--;
                  }
  
                  if(this.myTransactions[i].public_reciever === doctors[j].public_key) {
                    this.myTransactions[i].fullname_reciever = doctors[j].full_name;
                    countEmpty--;
                  }
  
                  if(!countEmpty)
                    break;
                }
              }
          }

          for(var i: number = 0; i < this.myTransactions.length; i++) {
            if(this.myTransactions[i].fullname_sender === "") {
              this.myTransactions[i].fullname_sender = "Ustvarjanje denarnice";
            }

            if(this.myTransactions[i].fullname_reciever === "") {
              this.myTransactions[i].fullname_reciever = "Neregistrirani uporabnik";
            }
          }

        });
      });
    });
  }

}
