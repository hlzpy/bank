import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRateSettingComponent } from './product-rate-setting.component';

describe('ProductRateSettingComponent', () => {
  let component: ProductRateSettingComponent;
  let fixture: ComponentFixture<ProductRateSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductRateSettingComponent]
    });
    fixture = TestBed.createComponent(ProductRateSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
