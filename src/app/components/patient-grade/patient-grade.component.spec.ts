import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientGradeComponent } from './patient-grade.component';

describe('PatientGradeComponent', () => {
  let component: PatientGradeComponent;
  let fixture: ComponentFixture<PatientGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
