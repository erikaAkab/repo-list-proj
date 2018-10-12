import { Component, OnInit } from '@angular/core';

import { GitHubService } from '../github.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    public userSigned: boolean;
    public headerDescription: string;

    constructor(private gitHubService: GitHubService) {}

    ngOnInit() {
        this.gitHubService.loginStatus.subscribe((status) => {
            this.userSigned = status;
        });
    }

    getHeaderTitle() {
        if(this.userSigned) {
            this.headerDescription = "Lista de repositórios";
        } else {
            this.headerDescription = "Acesso a lista de repositórios";
        }
        return this.headerDescription;
    }

    signOut() {
        this.gitHubService.signOut();
    }
}
