import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniEcomJqueryComponent } from './mini-ecom-jquery.component';

describe('MiniEcomJqueryComponent', () => {
  let component: MiniEcomJqueryComponent;
  let fixture: ComponentFixture<MiniEcomJqueryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiniEcomJqueryComponent]
    });
    fixture = TestBed.createComponent(MiniEcomJqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
