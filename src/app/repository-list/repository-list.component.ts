import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { GitHubService } from '../github.service';

import { Repository } from '../models/repository.model';

import * as VanillaToasts from 'vanillatoasts';

import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})

export class RepositoryListComponent implements OnInit {
  public repositories: Array<Repository> = [];
  public repositoriesToShow: Array<Repository> = [];

  constructor(private title: Title, private githubService: GitHubService) {}

  ngOnInit() {
      this.title.setTitle('GitHub - Meus Repositórios');

      this.githubService.getRepositoryList().subscribe(
          (repositories: Array<Repository>) => {
              Object.assign(this.repositories, repositories);
              Object.assign(this.repositoriesToShow, repositories);
          },
          () => {
              this.githubService.signOut();
              VanillaToasts.create({
                  title: 'Erro!',
                  text: `Não foi possivel carregar a lista de repositórios.`,
                  type: 'error',
                  timeout: 3500
              });
          }
      );
  }
}
