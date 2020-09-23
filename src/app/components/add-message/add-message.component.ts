import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message';
import { MessagesService } from '../../services/messages.service';
import { DoctorService } from '../../services/doctor.service';
import { PatientService } from '../../services/patient.service';
import { MessagesComponent } from '../../components/messages/messages.component';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent implements OnInit {

  message:Message = {_id:'', fromPatient:'', toPatient:'', fromDoctor:'', toDoctor:'', content:''};
  messageComponent : MessagesComponent = new MessagesComponent(this.messagesService,
    this.doctorService, this.patientServise);

  constructor(private messagesService:MessagesService, private doctorService: DoctorService,
    private patientServise: PatientService) { }

  addMessage() {

    console.log(localStorage.getItem('mode'));
    if(localStorage.getItem('mode') == 'doctor'){
      this.message.fromDoctor = window.location.href.split('/')[4];
      this.message.toPatient = window.location.href.split('/')[5];
    }
    else
    {
      this.message.fromPatient = window.location.href.split('/')[5];
      this.message.toDoctor = window.location.href.split('/')[4];
    }

    this.messagesService.addMessage(this.message)
    .subscribe(messages => {

      this.messagesService.messages.next(messages);
      console.log(messages);
    });

    this.message.content = '';
  }

  ngOnInit(): void {

  }

}
