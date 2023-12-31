import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeSearchComponent } from './youtube-search.component';

describe('YoutubeSearchComponent', () => {
  let component: YoutubeSearchComponent;
  let fixture: ComponentFixture<YoutubeSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YoutubeSearchComponent]
    });
    fixture = TestBed.createComponent(YoutubeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
