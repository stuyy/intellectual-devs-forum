import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumCategoryComponent } from './forum-category.component';

describe('ForumCategoryComponent', () => {
  let component: ForumCategoryComponent;
  let fixture: ComponentFixture<ForumCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
