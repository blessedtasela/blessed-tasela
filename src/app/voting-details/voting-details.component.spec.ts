import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingDetailsComponent } from './voting-details.component';

describe('VotingDetailsComponent', () => {
  let component: VotingDetailsComponent;
  let fixture: ComponentFixture<VotingDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotingDetailsComponent]
    });
    fixture = TestBed.createComponent(VotingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
