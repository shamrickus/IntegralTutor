import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.cmp';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {CalComponent} from './cal/cal.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule, Routes} from "@angular/router";
import { SanitizePipe } from './services/sanitize.pipe';
import { PoliciesComponent } from './policies/policies.component';
import {MaterialModule} from "./app.material";
import {LoginComponent, LoginDialog} from './login/login.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RequestService} from "./services/request.service";
import {HttpClientModule} from "@angular/common/http";
import { OAuthModule } from 'angular-oauth2-oidc';

const appRoutes: Routes = [
	{path: 'about', component: AboutComponent},
	{path: 'home', component: HomeComponent},
	{path: 'cal', component: CalComponent},
	{path: 'policies', component: PoliciesComponent},
	{path: '', redirectTo: '/home', pathMatch: 'full'}
];


@NgModule({
	declarations: [
		AppComponent,
		AboutComponent,
		HomeComponent,
		CalComponent,
		PoliciesComponent,
		SanitizePipe,
		LoginComponent,
		LoginDialog
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MaterialModule,
		FlexLayoutModule,
		FormsModule,
		ReactiveFormsModule,
    HttpClientModule,
    OAuthModule.forRoot(),
		RouterModule.forRoot(
			appRoutes,
			{enableTracing: false}
		)
	],
	providers: [
	  RequestService
  ],
	entryComponents: [
		LoginDialog
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
