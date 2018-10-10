import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GitHubLoginComponent } from './git-hub-login/git-hub-login.component';

const routes: Routes = [
  {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
  },
  {
    path: 'login',
    component: GitHubLoginComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
