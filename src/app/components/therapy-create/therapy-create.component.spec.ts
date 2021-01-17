import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapyCreateComponent } from './therapy-create.component';

describe('TherapyCreateComponent', () => {
  let component: TherapyCreateComponent;
  let fixture: ComponentFixture<TherapyCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherapyCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
