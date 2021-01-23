import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisShowComponent } from './analysis-show.component';

describe('AnalysisShowComponent', () => {
  let component: AnalysisShowComponent;
  let fixture: ComponentFixture<AnalysisShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
