import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInfoHomeComponent } from './customer-info-home.component';

describe('CustomerInfoHomeComponent', () => {
  let component: CustomerInfoHomeComponent;
  let fixture: ComponentFixture<CustomerInfoHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerInfoHomeComponent]
    });
    fixture = TestBed.createComponent(CustomerInfoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
