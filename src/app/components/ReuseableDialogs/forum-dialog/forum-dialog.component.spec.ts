import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumDialogComponent } from './forum-dialog.component';

describe('ForumDialogComponent', () => {
  let component: ForumDialogComponent;
  let fixture: ComponentFixture<ForumDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
