import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GitHubLoginComponent } from './git-hub-login/git-hub-login.component';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { LoadingComponent } from './loading/loading.component';
import { AuthGuard } from './auth-guard.guard';
const routes: Routes = [
  {
    path: 'git-hub-login',
    component: GitHubLoginComponent
},
  {
      path: '',
      redirectTo: 'git-hub-login',
      pathMatch: 'full'
  },

  {
    path: 'loading',
    component: LoadingComponent,
  },
  {
    path: 'repository-list',
    component: RepositoryListComponent,
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
