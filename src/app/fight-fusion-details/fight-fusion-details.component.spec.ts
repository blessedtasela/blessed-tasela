import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightFusionDetailsComponent } from './fight-fusion-details.component';

describe('FightFusionDetailsComponent', () => {
  let component: FightFusionDetailsComponent;
  let fixture: ComponentFixture<FightFusionDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FightFusionDetailsComponent]
    });
    fixture = TestBed.createComponent(FightFusionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
