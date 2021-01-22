import { Component } from '@angular/core';
import { Doctor } from './models/doctor';
import { Patient } from './models/patient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'POC-DOC';
  doctor: Doctor = {
    _id: '', medical_number: '', password: '', full_name: '',
    specialization: '', phone: '', location: '', grading_points: 0, grade: 0, private_key: "", public_key: ''
  };
  patient: Patient = {
    _id: '', medical_number: '', password: '',
    full_name: '', phone: '', location: '', grading_points: 0, grade: 0, private_key: "", public_key: ''
  };


  isLoggedIn() {

    if (localStorage.getItem('currentUser') != null) {
      //console.log("logged in");
      return true;
    }
    else {
      //console.log("logged out");
      return false;
    }
  }

  switchMode(newMode: string) {
    localStorage.setItem('mode', newMode);
    console.log(localStorage.getItem('mode'));
  }

  isPatient() {
    if (localStorage.getItem('mode') == 'patient'){
      this.patient = JSON.parse(window.localStorage.getItem('currentUser'));
      return true;
    }
    return false;
  }

  isDoctor() {
    if (localStorage.getItem('mode') == 'doctor'){
      this.doctor = JSON.parse(window.localStorage.getItem('currentUser'));
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  ngOnInit(): void {
    if (!localStorage.getItem('mode'))
      localStorage.setItem('mode', 'patient');
  }
}
