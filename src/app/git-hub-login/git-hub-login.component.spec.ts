import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { GitHubLoginComponent } from './git-hub-login.component';

import { GitHubService } from '../github.service';

describe('GitHubLoginComponent', () => {
  let component: GitHubLoginComponent;
  let fixture: ComponentFixture<GitHubLoginComponent>;

  const title = {
    setTitle: () => ({})
  };

  const router = {
    navigate: () => ({})
  };

  const githubService = {
    getSignedStatus: () => ({})
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHubLoginComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: GitHubService, useValue: githubService },
        { provide: Router, useValue: router },
        { provide: Title, useValue: title }
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(GitHubLoginComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('make correct calls', () => {
    const title: Title = fixture.debugElement.injector.get(Title);
    const githubService: GitHubService = fixture.debugElement.injector.get(GitHubService);

    spyOn(title, 'setTitle');
    spyOn(githubService, 'getSignedStatus');
    
    component.ngOnInit();
    
    expect(title.setTitle).toHaveBeenCalled();
    expect(githubService.getSignedStatus).toHaveBeenCalled();
  });
});
