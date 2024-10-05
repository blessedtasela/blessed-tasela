import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicUiDetailsComponent } from './music-ui-details.component';

describe('MusicUiDetailsComponent', () => {
  let component: MusicUiDetailsComponent;
  let fixture: ComponentFixture<MusicUiDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusicUiDetailsComponent]
    });
    fixture = TestBed.createComponent(MusicUiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
