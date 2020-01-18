import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicCreateFormComponent } from './topic-create-form.component';

describe('TopicCreateFormComponent', () => {
  let component: TopicCreateFormComponent;
  let fixture: ComponentFixture<TopicCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
