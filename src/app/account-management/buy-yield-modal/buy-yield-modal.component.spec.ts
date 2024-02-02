import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyYieldModalComponent } from './buy-yield-modal.component';

describe('BuyYieldModalComponent', () => {
  let component: BuyYieldModalComponent;
  let fixture: ComponentFixture<BuyYieldModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyYieldModalComponent]
    });
    fixture = TestBed.createComponent(BuyYieldModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
