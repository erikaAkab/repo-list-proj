import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { HeaderComponent } from './header.component';

import { GitHubService } from '../github.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    const githubService = {
      signOut: () => ({})
    };

    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: GitHubService, useValue: githubService }]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call git hub signOut function', () => {
    const githubService: GitHubService = fixture.debugElement.injector.get(GitHubService);
    spyOn(githubService, 'signOut');
    component.signOut();

    expect(githubService.signOut).toHaveBeenCalled();
  });

  it('should have a title', () => {
    let title = component.getHeaderTitle();
    
    expect(title).not.toBeNull();
  });
});
