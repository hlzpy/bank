import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialNewsComponent } from './financial-news.component';

describe('FinancialNewsComponent', () => {
  let component: FinancialNewsComponent;
  let fixture: ComponentFixture<FinancialNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinancialNewsComponent]
    });
    fixture = TestBed.createComponent(FinancialNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
