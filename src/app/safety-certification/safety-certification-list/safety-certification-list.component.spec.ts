import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyCertificationListComponent } from './safety-certification-list.component';

describe('SafetyCertificationListComponent', () => {
  let component: SafetyCertificationListComponent;
  let fixture: ComponentFixture<SafetyCertificationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SafetyCertificationListComponent]
    });
    fixture = TestBed.createComponent(SafetyCertificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
