import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerlizDetailsComponent } from './berliz-details.component';

describe('BerlizDetailsComponent', () => {
  let component: BerlizDetailsComponent;
  let fixture: ComponentFixture<BerlizDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BerlizDetailsComponent]
    });
    fixture = TestBed.createComponent(BerlizDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
