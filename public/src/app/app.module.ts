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
		SanitizePipe
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MaterialModule,
		RouterModule.forRoot(
			appRoutes,
			{enableTracing: false}
		)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
