import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumTopicComponent } from './forum-topic.component';

describe('ForumTopicComponent', () => {
  let component: ForumTopicComponent;
  let fixture: ComponentFixture<ForumTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
