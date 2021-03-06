import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { PatientRegisterComponent } from './components/patient-register/patient-register.component';
import { PatientProfileComponent} from './components/patient-profile/patient-profile.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientGradeComponent} from './components/patient-grade/patient-grade.component';
import { PatientCardiologyComponent } from './components/patient-cardiology/patient-cardiology.component';
import { PatientEditComponent } from './components/patient-edit/patient-edit.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { DoctorRegisterComponent } from './components/doctor-register/doctor-register.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { DoctorGradeComponent } from './components/doctor-grade/doctor-grade.component';
import { HomeComponent } from './components/home/home.component';
import { HomeDoctorComponent } from './components/home-doctor/home-doctor.component';
import { BorrowNewComponent } from './components/borrow-new/borrow-new.component';
import { BorrowListComponent } from './components/borrow-list/borrow-list.component';
import { BorrowHistoryComponent } from './components/borrow-history/borrow-history.component';
import { LoginGuard } from './components/login-guard/login.guard';
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
import { PendingListComponent } from './components/pending-list/pending-list.component';
import { PredictionShowComponent } from './components/prediction-show/prediction-show.component';
import { AnalysesListComponent } from './components/analyses-list/analyses-list.component';
import { AnalysisShowComponent } from './components/analysis-show/analysis-show.component';
import { ChartsModule } from 'ng2-charts';


const routes: Routes = [
  { path: 'patient-login', component: PatientLoginComponent },
  { path: 'patient-register', component: PatientRegisterComponent },
  { path: 'patient-profile', component: PatientProfileComponent, canActivate: [LoginGuard] },
  { path: 'patient-grade/:_id', component: PatientGradeComponent, canActivate: [LoginGuard]},
  { path: 'patient-list', component: PatientListComponent, canActivate: [LoginGuard]},
  { path: 'patient-cardiology/:_id', component: PatientCardiologyComponent, canActivate: [LoginGuard]},
  { path: 'patient-edit/:_id', component: PatientEditComponent, canActivate: [LoginGuard]},
  { path: 'doctor-login', component: DoctorLoginComponent },
  { path: 'doctor-register', component: DoctorRegisterComponent },
  { path: 'doctor-profile', component: DoctorProfileComponent, canActivate: [LoginGuard] },
  { path: 'doctor-grade/:_id', component: DoctorGradeComponent, canActivate: [LoginGuard] },
  { path: 'doctor-list', component: DoctorListComponent, canActivate: [LoginGuard] },
  { path: 'home-doctor', component: HomeDoctorComponent, canActivate: [LoginGuard] },
  { path: 'borrow-new', component : BorrowNewComponent, canActivate: [LoginGuard] },
  { path: 'borrow-list', component : BorrowListComponent, canActivate: [LoginGuard] },
  { path: 'borrow-history', component : BorrowHistoryComponent, canActivate: [LoginGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'chat/:doctor/:patient', component: ChatComponent },
  { path: 'add-message', component: AddMessageComponent },
  { path: 'diagnosis-list', component: DiagnosisListComponent, canActivate: [LoginGuard] },
  { path: 'diagnosis-list/:id', component: DiagnosisListComponent, canActivate: [LoginGuard] },
  { path: 'diagnosis-create/:_id', component: DiagnosisCreateComponent, canActivate: [LoginGuard] },
  { path: 'diagnosis-edit/:_id', component: DiagnosisEditComponent, canActivate: [LoginGuard] },
  { path: 'therapy-list', component: TherapyListComponent, canActivate: [LoginGuard]},
  { path: 'therapy-list/:id', component: TherapyListComponent, canActivate: [LoginGuard]},
  { path: 'therapy-list/:id/:id', component: TherapyListComponent, canActivate: [LoginGuard]},
  { path: 'therapy-create/:_id/:_id', component: TherapyCreateComponent, canActivate: [LoginGuard] },
  { path: 'therapy-edit/:_id', component: TherapyEditComponent, canActivate: [LoginGuard] },
  { path: 'pending-list/doctor/:_id', component: PendingListComponent, canActivate: [LoginGuard] },
  { path: 'pending-list/patient/:_id', component: PendingListComponent, canActivate: [LoginGuard] },
  { path: 'prediction-show/:_id', component: PredictionShowComponent, canActivate: [LoginGuard] },
  { path: 'analyses-list/patient/:_id', component: AnalysesListComponent, canActivate: [LoginGuard] },
  { path: 'analyses-list/doctor/:_id', component: AnalysesListComponent, canActivate: [LoginGuard] },
  { path: 'analyses-show/:_id', component: AnalysesListComponent, canActivate: [LoginGuard] }


];

@NgModule({
  imports: [RouterModule.forRoot(routes), ChartsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
