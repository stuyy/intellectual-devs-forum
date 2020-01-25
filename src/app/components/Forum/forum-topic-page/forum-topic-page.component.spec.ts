import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumTopicPageComponent } from './forum-topic-page.component';

describe('ForumTopicPageComponent', () => {
  let component: ForumTopicPageComponent;
  let fixture: ComponentFixture<ForumTopicPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumTopicPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumTopicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
