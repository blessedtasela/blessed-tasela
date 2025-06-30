import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasylifeDetailsComponent } from './easylife-details.component';

describe('EasylifeDetailsComponent', () => {
  let component: EasylifeDetailsComponent;
  let fixture: ComponentFixture<EasylifeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EasylifeDetailsComponent]
    });
    fixture = TestBed.createComponent(EasylifeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
