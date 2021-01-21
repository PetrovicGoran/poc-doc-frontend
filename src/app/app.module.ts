import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { PatientRegisterComponent } from './components/patient-register/patient-register.component';
import { HomeComponent } from './components/home/home.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { DoctorRegisterComponent } from './components/doctor-register/doctor-register.component';
import { HomeDoctorComponent } from './components/home-doctor/home-doctor.component';
import { BorrowNewComponent } from './components/borrow-new/borrow-new.component';
import { BorrowListComponent } from './components/borrow-list/borrow-list.component';
import { BorrowHistoryComponent } from './components/borrow-history/borrow-history.component';
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { DoctorGradeComponent } from './components/doctor-grade/doctor-grade.component';
import { PatientGradeComponent } from './components/patient-grade/patient-grade.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AddMessageComponent } from './components/add-message/add-message.component';
import { ChatComponent } from './components/chat/chat.component';
import { DiagnosisListComponent } from './components/diagnosis-list/diagnosis-list.component';
import { DiagnosisCreateComponent } from './components/diagnosis-create/diagnosis-create.component';
import { DiagnosisEditComponent } from './components/diagnosis-edit/diagnosis-edit.component';
import { TherapyListComponent } from './components/therapy-list/therapy-list.component';
import { TherapyCreateComponent } from './components/therapy-create/therapy-create.component';
import { TherapyEditComponent } from './components/therapy-edit/therapy-edit.component';
import { PatientCardiologyComponent } from './components/patient-cardiology/patient-cardiology.component';
import { PendingListComponent } from './components/pending-list/pending-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientLoginComponent,
    PatientRegisterComponent,
    HomeComponent,
    DoctorLoginComponent,
    DoctorRegisterComponent,
    HomeDoctorComponent,
    BorrowNewComponent,
    BorrowListComponent,
    BorrowHistoryComponent,
    PatientProfileComponent,
    DoctorProfileComponent,
    PatientListComponent,
    DoctorListComponent,
    DoctorGradeComponent,
    PatientGradeComponent,
    TransactionsComponent,
    MessagesComponent,
    AddMessageComponent,
    ChatComponent,
    DiagnosisListComponent,
    DiagnosisCreateComponent,
    DiagnosisEditComponent,
    TherapyListComponent,
    TherapyCreateComponent,
    TherapyEditComponent,
    PatientCardiologyComponent,
    PendingListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
