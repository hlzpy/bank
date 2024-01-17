import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanManagementListComponent } from './loan-management-list.component';

describe('LoanManagementListComponent', () => {
  let component: LoanManagementListComponent;
  let fixture: ComponentFixture<LoanManagementListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanManagementListComponent]
    });
    fixture = TestBed.createComponent(LoanManagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
