import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCustomerInfoModalComponent } from './edit-customer-info-modal.component';

describe('EditCustomerInfoModalComponent', () => {
  let component: EditCustomerInfoModalComponent;
  let fixture: ComponentFixture<EditCustomerInfoModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCustomerInfoModalComponent]
    });
    fixture = TestBed.createComponent(EditCustomerInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
