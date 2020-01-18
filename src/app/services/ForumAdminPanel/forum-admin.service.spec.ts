import { TestBed } from '@angular/core/testing';

import { ForumAdminService } from './forum-admin.service';

describe('ForumAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForumAdminService = TestBed.get(ForumAdminService);
    expect(service).toBeTruthy();
  });
});
