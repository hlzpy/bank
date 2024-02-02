import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositManagementListComponent } from './deposit-management-list.component';

describe('DepositManagementListComponent', () => {
  let component: DepositManagementListComponent;
  let fixture: ComponentFixture<DepositManagementListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepositManagementListComponent]
    });
    fixture = TestBed.createComponent(DepositManagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
