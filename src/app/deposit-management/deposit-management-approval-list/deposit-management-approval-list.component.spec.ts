import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositManagementApprovalListComponent } from './deposit-management-approval-list.component';

describe('DepositManagementApprovalListComponent', () => {
  let component: DepositManagementApprovalListComponent;
  let fixture: ComponentFixture<DepositManagementApprovalListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepositManagementApprovalListComponent]
    });
    fixture = TestBed.createComponent(DepositManagementApprovalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
