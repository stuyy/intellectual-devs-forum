import { TestBed } from '@angular/core/testing';

import { ForumService } from './forum.service';

describe('ForumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForumService = TestBed.get(ForumService);
    expect(service).toBeTruthy();
  });
});
