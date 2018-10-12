import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GitHubService } from '../github.service';

import * as VanillaToasts from 'vanillatoasts';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})

export class LoadingComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private gitHubService: GitHubService, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
        const code = params['code'];
        if (code) {
            this.gitHubService.signIn(code);
        } else {
            setTimeout(() => {
                this.router.navigate(['/']);
                VanillaToasts.create({
                    title: 'Erro!',
                    text: `Não foi possivel se autenticar no GitHub, tente novamente mais tarde.`,
                    type: 'error',
                    timeout: 3500,
                    callback: () => this.router.navigate(['/'])
                });
            }, 1000)
        }
    });
  }
}
