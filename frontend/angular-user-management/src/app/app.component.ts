import { Component } from '@angular/core';
import {trigger, animate, style, group, query, transition} from '@angular/animations';

import { routerTransition } from './router.animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ routerTransition ],
})
export class AppComponent {
  title = 'app';
  showHiddenSecrets = false;
  navFlex = 80;
  menuArray = [
    { fxFlex:"100", class: "mat-raised-button", routerLink: "/home", routerLinkActive: "mat-primary", text: "Home", routerLinkActiveOptions: {exact: true} },
    { fxFlex:"100", class: "mat-raised-button", routerLink: "/users", routerLinkActive: "mat-primary", text: "Users", routerLinkActiveOptions: {} },
    { fxFlex:"100", class: "mat-raised-button", routerLink: "/lazy", routerLinkActive: "mat-primary", text: "Sign Up", routerLinkActiveOptions: {} },
    { fxFlex:"100", class: "mat-raised-button", routerLink: "/restricted", routerLinkActive: "mat-primary", text: "Restricted Area", routerLinkActiveOptions: {} }
  ];
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
