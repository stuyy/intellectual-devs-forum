import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumAdminPanelComponent } from './forum-admin-panel.component';

describe('ForumAdminPanelComponent', () => {
  let component: ForumAdminPanelComponent;
  let fixture: ComponentFixture<ForumAdminPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumAdminPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumAdminPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
