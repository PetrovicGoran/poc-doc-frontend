import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCardiologyComponent } from './patient-cardiology.component';

describe('PatientCardiologyComponent', () => {
  let component: PatientCardiologyComponent;
  let fixture: ComponentFixture<PatientCardiologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientCardiologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientCardiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
