import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesModalComponent } from './services-modal.component';

describe('ServicesModalComponent', () => {
  let component: ServicesModalComponent;
  let fixture: ComponentFixture<ServicesModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesModalComponent]
    });
    fixture = TestBed.createComponent(ServicesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
