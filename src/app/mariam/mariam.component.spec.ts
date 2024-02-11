import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MariamComponent } from './mariam.component';

describe('MariamComponent', () => {
  let component: MariamComponent;
  let fixture: ComponentFixture<MariamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MariamComponent]
    });
    fixture = TestBed.createComponent(MariamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
