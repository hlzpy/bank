import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanSettingModalComponent } from './loan-setting-modal.component';

describe('LoanSettingModalComponent', () => {
  let component: LoanSettingModalComponent;
  let fixture: ComponentFixture<LoanSettingModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanSettingModalComponent]
    });
    fixture = TestBed.createComponent(LoanSettingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
