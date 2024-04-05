import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MariamDetailsComponent } from './mariam-details.component';

describe('MariamDetailsComponent', () => {
  let component: MariamDetailsComponent;
  let fixture: ComponentFixture<MariamDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MariamDetailsComponent]
    });
    fixture = TestBed.createComponent(MariamDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
