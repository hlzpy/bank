import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialNewsDetailComponent } from './financial-news-detail.component';

describe('FinancialNewsDetailComponent', () => {
  let component: FinancialNewsDetailComponent;
  let fixture: ComponentFixture<FinancialNewsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinancialNewsDetailComponent]
    });
    fixture = TestBed.createComponent(FinancialNewsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
