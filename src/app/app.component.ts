import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'POC-DOC';

  isLoggedIn(){

    if (localStorage.getItem('currentUser') != null) {
      //console.log("logged in");
      return true;
    }
    else {
      //console.log("logged out");
      return false;
    }
  }

  switchMode(newMode : string){
   localStorage.setItem('mode', newMode);
   console.log(localStorage.getItem('mode'));
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

  logout(){
    localStorage.removeItem('currentUser');
  }

  ngOnInit(): void {
    if(!localStorage.getItem('mode'))
      localStorage.setItem('mode', 'patient');
  }
}
