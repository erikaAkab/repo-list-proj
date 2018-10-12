import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GitHubLoginComponent } from './git-hub-login/git-hub-login.component';
import { LoadingComponent } from './loading/loading.component';
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
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
