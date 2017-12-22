import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";
import {JwksValidationHandler, OAuthService, AuthConfig} from "angular-oauth2-oidc";
import {routerTransition} from "./animations/router.animation";

const autoConfig: AuthConfig = {
}

@Component({
  selector: 'app-root',
  templateUrl: './app.cmp.html',
  animations: [ routerTransition ],
  styleUrls: ['./app.cmp.scss'],
})
export class AppComponent implements OnInit {
    routeLinks: any[];
    activeLinkIndex: number = -1;

    constructor(private router: Router,
                private oauthService: OAuthService) {
        this.routeLinks = [
            {label: 'Home', link: './home'},
            {label: 'About', link: './about'},
            {label: 'Calendar', link: './cal'},
            {label: 'Policies', link: './policies'}
        ]
    }

    ngOnInit() {
        this.router.events.subscribe((res) => {
            this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
        });
    }

    getState(outlet: RouterOutlet) {
      return outlet.activatedRouteData;
    }
}


