import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionShowComponent } from './prediction-show.component';

describe('PredictionShowComponent', () => {
  let component: PredictionShowComponent;
  let fixture: ComponentFixture<PredictionShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictionShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictionShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
