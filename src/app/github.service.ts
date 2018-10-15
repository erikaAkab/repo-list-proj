import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from '../environments/environment';
import { Repository } from './models/repository.model';

import * as VanillaToasts from 'vanillatoasts';

@Injectable({
  providedIn: 'root'
})

export class GitHubService {
    private token: string;
    private userSigned: boolean;
    public readonly loginStatus = new BehaviorSubject<boolean>(false);

    constructor(private router: Router, private http: HttpClient) {
        this.loginStatus.subscribe((status: boolean) => (this.userSigned = status));
        this.token = sessionStorage.getItem('token');
        this.loginStatus.next(this.token ? true : false);
    }

    signIn(code: string) {
        this.requestToken(code).subscribe(
            (data) => {
                this.token = data.access_token;
                sessionStorage.setItem('token', this.token);
                this.loginStatus.next(true);
                this.router.navigate(['repository-list']);
            },
            () => {
                this.router.navigate(['/']);
                VanillaToasts.create({
                    title: 'Erro!',
                    text: `Não foi possivel acessar seu repositório, tente novamente mais tarde.`,
                    type: 'error',
                    timeout: 3500,
                    callback: () => this.router.navigate(['/'])
                });
            }
        );
    }

    getSignedStatus() {
        return this.userSigned;
    }

    signOut() {
        sessionStorage.removeItem('token');
        this.loginStatus.next(false);
        this.router.navigate(['/']);
    }

    getRepositoryList(): Observable<Array<Repository>> {
        return this.http.get<Array<Repository>>(`/api.github.com/user/repos?sort=created`, {
            headers: new HttpHeaders({
                Accept: 'application/json',
                Authorization: `Bearer ${this.token}`
            })
        });
    }

    private requestToken(code: string): Observable<any> {
        return this.http.post(
            '/github.com/login/oauth/access_token',
            {
                client_id: environment.CLIENT_ID,
                client_secret: environment.CLIENT_SECRET,
                code: code
            },
            {
                headers: new HttpHeaders({ Accept: 'application/json' }),
                withCredentials: false
            }
        );
    }
}
