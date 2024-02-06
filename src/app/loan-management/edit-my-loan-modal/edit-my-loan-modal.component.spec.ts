import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMyLoanModalComponent } from './edit-my-loan-modal.component';

describe('EditMyLoanModalComponent', () => {
  let component: EditMyLoanModalComponent;
  let fixture: ComponentFixture<EditMyLoanModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMyLoanModalComponent]
    });
    fixture = TestBed.createComponent(EditMyLoanModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
