import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerlizComponent } from './berliz.component';

describe('BerlizComponent', () => {
  let component: BerlizComponent;
  let fixture: ComponentFixture<BerlizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BerlizComponent]
    });
    fixture = TestBed.createComponent(BerlizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
