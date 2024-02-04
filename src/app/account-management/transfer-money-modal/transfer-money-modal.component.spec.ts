import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferMoneyModalComponent } from './transfer-money-modal.component';

describe('TransferMoneyModalComponent', () => {
  let component: TransferMoneyModalComponent;
  let fixture: ComponentFixture<TransferMoneyModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferMoneyModalComponent]
    });
    fixture = TestBed.createComponent(TransferMoneyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
