import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LoadingComponent } from './loading.component';

import { GitHubService } from '../github.service';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(async(() => {
    const activatedRoute = {};
    const router = {};
    const githubService = {};

    TestBed.configureTestingModule({
      declarations: [ LoadingComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
          { provide: ActivatedRoute, useValue: activatedRoute },
          { provide: Router, useValue: router },
          { provide: GitHubService, useValue: githubService }
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
