import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumPostPageComponent } from './forum-post-page.component';

describe('ForumPostPageComponent', () => {
  let component: ForumPostPageComponent;
  let fixture: ComponentFixture<ForumPostPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumPostPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumPostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
