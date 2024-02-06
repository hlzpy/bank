import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlanModalComponent } from './my-plan-modal.component';

describe('MyPlanModalComponent', () => {
  let component: MyPlanModalComponent;
  let fixture: ComponentFixture<MyPlanModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyPlanModalComponent]
    });
    fixture = TestBed.createComponent(MyPlanModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
