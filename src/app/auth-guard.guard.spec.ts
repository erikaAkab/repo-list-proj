import { TestBed, async, inject } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AuthGuard } from './auth-guard.guard';
import { Router } from '@angular/router';
import { GitHubService } from './github.service';


describe('AuthGuard', () => {
  const router = {
    navigate: () => ({})
  };

  const githubService = {
    getSignedStatus: () => ({})
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        AuthGuard,
        { provide: Router, useValue: router },
        { provide: GitHubService, useValue: githubService },
      ]
    });
  });

  it('should create', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
