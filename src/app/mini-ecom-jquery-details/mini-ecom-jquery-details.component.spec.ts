import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniEcomJqueryDetailsComponent } from './mini-ecom-jquery-details.component';

describe('MiniEcomJqueryDetailsComponent', () => {
  let component: MiniEcomJqueryDetailsComponent;
  let fixture: ComponentFixture<MiniEcomJqueryDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiniEcomJqueryDetailsComponent]
    });
    fixture = TestBed.createComponent(MiniEcomJqueryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
