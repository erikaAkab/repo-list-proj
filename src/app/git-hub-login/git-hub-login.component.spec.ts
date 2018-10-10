import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubLoginComponent } from './git-hub-login.component';

describe('GitHubLoginComponent', () => {
  let component: GitHubLoginComponent;
  let fixture: ComponentFixture<GitHubLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHubLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
