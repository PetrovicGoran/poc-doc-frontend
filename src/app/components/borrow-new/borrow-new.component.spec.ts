import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowNewComponent } from './borrow-new.component';

describe('BorrowNewComponent', () => {
  let component: BorrowNewComponent;
  let fixture: ComponentFixture<BorrowNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
