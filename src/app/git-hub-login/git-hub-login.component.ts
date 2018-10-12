import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { GitHubService } from '../github.service';
import { environment } from './../../environments/environment'

@Component({
  selector: 'app-git-hub-login',
  templateUrl: './git-hub-login.component.html',
  styleUrls: ['./git-hub-login.component.css']
})

export class GitHubLoginComponent implements OnInit {
  constructor(private gitHubService: GitHubService, private router: Router, private title: Title) { }

  ngOnInit() {
    if (this.gitHubService.getSignedStatus() === true) {
      this.router.navigate(['repository-list']);
    } else {
      this.title.setTitle('GithubRepositoryList - Autenticação');
    }
  }

  requestLogin() {
    location.href = `https://github.com/login/oauth/authorize?client_id=${
        environment.CLIENT_ID
    }&scope=public_repo&redirect_uri=${location.protocol}//${location.host}/loading`;
  }
}
