import { Component, OnInit, OnDestroy } from '@angular/core';
import { Message } from '../../models/message';
import { Doctor } from '../../models/doctor';
import { DoctorService } from '../../services/doctor.service';
import { Patient } from '../../models/patient';
import { PatientService } from '../../services/patient.service';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit, OnDestroy {

  messages:Message[];
  host = MessagesService.host;
  stop;

  doctor:Doctor={_id:'',medical_number:'',password:'', full_name:'',
  specialization:'', phone:'', location:'', grading_points:0, grade:0, private_key: '', public_key: ''};

  patient:Patient={_id:'',medical_number:'',password:'',
  full_name:'', phone:'', location:'', grading_points:0, grade:0, private_key: '', public_key: ''};

  constructor(private messageService: MessagesService, private doctorService: DoctorService,
    private patientServise: PatientService) { }


  getProfiles(): void {

    this.doctorService.getDoctor(window.location.href.split('/')[4])
        .subscribe(doctor => {
          this.doctor = doctor;
        });

    this.patientServise.getPatient(window.location.href.split('/')[5])
    .subscribe(patient => {
      this.patient = patient;
    });
  }


  getMessages(): void {
    this.messageService.getMessages()
        .subscribe(messages => this.messages = messages);
  }

  isPatientMessage(message:Message){
    if (!message.fromPatient)
    return false;
  return true;
  }

  isDoctorMessage(message:Message){
    if (!message.fromDoctor)
    return false;
  return true;
  }

  isPatient(){
    if (localStorage.getItem('mode') == 'patient')
    return true;
  return false;
  }

  isDoctor(){
    if (localStorage.getItem('mode') == 'doctor')
    return true;
  return false;
  }

  ngOnInit(): void {
    this.getProfiles();
    this.getMessages();

    this.messageService.messages.subscribe(messages => {
      this.messages = messages;
    });

     this.stop = setInterval(() => {
      this.getMessages();
      }, 5000);
  }

  ngOnDestroy(): void {
    if (this.stop) {
      clearInterval(this.stop);
    }
  }

}
