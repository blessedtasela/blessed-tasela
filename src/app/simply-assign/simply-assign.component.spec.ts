import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplyAssignComponent } from './simply-assign.component';

describe('SimplyAssignComponent', () => {
  let component: SimplyAssignComponent;
  let fixture: ComponentFixture<SimplyAssignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimplyAssignComponent]
    });
    fixture = TestBed.createComponent(SimplyAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
