import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicUiComponent } from './music-ui.component';

describe('MusicUiComponent', () => {
  let component: MusicUiComponent;
  let fixture: ComponentFixture<MusicUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusicUiComponent]
    });
    fixture = TestBed.createComponent(MusicUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
