import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { RepositoryListComponent } from './repository-list.component';
import { Repository } from '../models/repository.model';

import { GitHubService } from '../github.service';

import { Observable } from 'rxjs';

describe('RepositoryListComponent', () => {
  let component: RepositoryListComponent;
  let fixture: ComponentFixture<RepositoryListComponent>;

  beforeEach(async(() => {
    const title = {
      setTitle: () => ({})
    };
    const githubService = {
        getRepositoryList: () => new Observable<Array<Repository>>(),
        signOut: () => ({})
    };

    TestBed.configureTestingModule({
      declarations: [ RepositoryListComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: Title, useValue: title }, { provide: GitHubService, useValue: githubService }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepositoryListComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('make correct calls', () => {
    const title: Title = fixture.debugElement.injector.get(Title);
    const githubService: GitHubService = fixture.debugElement.injector.get(GitHubService);

    spyOn(title, 'setTitle');
    spyOn(githubService, 'getRepositoryList').and.returnValue(new Observable<Array<Repository>>());

    component.ngOnInit();

    expect(title.setTitle).toHaveBeenCalled();
    expect(githubService.getRepositoryList).toHaveBeenCalled();
  });
});
