import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GitHubLoginComponent } from './git-hub-login/git-hub-login.component';
import { LoadingComponent } from './loading/loading.component';

import { AuthGuard } from './auth-guard.guard';
import { GitHubService } from './github.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GitHubLoginComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AuthGuard, GitHubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
