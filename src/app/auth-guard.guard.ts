import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { GitHubService } from './github.service';

import * as VanillaToasts from 'vanillatoasts';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanLoad {
  constructor(private gitHubService: GitHubService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const status = this.gitHubService.getSignedStatus();

    if (status === false) {
        setTimeout(
            () =>
                VanillaToasts.create({
                    title: 'Atenção!',
                    text: `Para acessar "${next.routeConfig.path}" é necessário autenticação.`,
                    type: 'warning',
                    timeout: 3500
                }),
            1000
        );

        this.router.navigate(['git-hub-login']);
    } else {
        return status;
    }
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.gitHubService.getSignedStatus();
  }
}
