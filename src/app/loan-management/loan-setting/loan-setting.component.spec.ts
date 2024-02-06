import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanSettingComponent } from './loan-setting.component';

describe('LoanSettingComponent', () => {
  let component: LoanSettingComponent;
  let fixture: ComponentFixture<LoanSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanSettingComponent]
    });
    fixture = TestBed.createComponent(LoanSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
