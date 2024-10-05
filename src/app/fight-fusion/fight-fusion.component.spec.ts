import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightFusionComponent } from './fight-fusion.component';

describe('FightFusionComponent', () => {
  let component: FightFusionComponent;
  let fixture: ComponentFixture<FightFusionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FightFusionComponent]
    });
    fixture = TestBed.createComponent(FightFusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
