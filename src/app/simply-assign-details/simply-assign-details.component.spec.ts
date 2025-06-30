import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplyAssignDetailsComponent } from './simply-assign-details.component';

describe('SimplyAssignDetailsComponent', () => {
  let component: SimplyAssignDetailsComponent;
  let fixture: ComponentFixture<SimplyAssignDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimplyAssignDetailsComponent]
    });
    fixture = TestBed.createComponent(SimplyAssignDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
