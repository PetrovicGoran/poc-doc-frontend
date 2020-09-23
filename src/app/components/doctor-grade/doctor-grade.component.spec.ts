import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorGradeComponent } from './doctor-grade.component';

describe('DoctorGradeComponent', () => {
  let component: DoctorGradeComponent;
  let fixture: ComponentFixture<DoctorGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
