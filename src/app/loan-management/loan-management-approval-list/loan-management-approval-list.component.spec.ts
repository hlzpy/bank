import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanManagementApprovalListComponent } from './loan-management-approval-list.component';

describe('LoanManagementApprovalListComponent', () => {
  let component: LoanManagementApprovalListComponent;
  let fixture: ComponentFixture<LoanManagementApprovalListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanManagementApprovalListComponent]
    });
    fixture = TestBed.createComponent(LoanManagementApprovalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
