import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleBlogComponent } from './article-blog.component';

describe('ArticleBlogComponent', () => {
  let component: ArticleBlogComponent;
  let fixture: ComponentFixture<ArticleBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleBlogComponent]
    });
    fixture = TestBed.createComponent(ArticleBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
