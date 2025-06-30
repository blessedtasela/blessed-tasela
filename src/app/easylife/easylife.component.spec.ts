import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasylifeComponent } from './easylife.component';

describe('EasylifeComponent', () => {
  let component: EasylifeComponent;
  let fixture: ComponentFixture<EasylifeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EasylifeComponent]
    });
    fixture = TestBed.createComponent(EasylifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
