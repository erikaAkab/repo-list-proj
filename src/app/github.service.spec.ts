import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { GitHubService } from './github.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

describe('GitHubService', () => {
  const router = {
    navigate: () => ({})
  };

  const httpClient = {
    get: () => ({}),
    post: () => ({})
  };

  beforeEach(() => TestBed.configureTestingModule({
    schemas: [NO_ERRORS_SCHEMA],
    providers: [
      { provide: Router, useValue: router },
      { provide: HttpClient, useValue: httpClient },
    ]
  }));

  it('should be created', () => {
    const service: GitHubService = TestBed.get(GitHubService);
    expect(service).toBeTruthy();
  });
});
