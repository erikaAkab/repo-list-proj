import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    public userSigned: boolean;
    public headerDescription: string;

    constructor() {}

  ngOnInit() {
    }

    getHeaderTitle() {
        this.headerDescription = "Temporario"
        return this.headerDescription;
  }

    signOut() {
    }
}
