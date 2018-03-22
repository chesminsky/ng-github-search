import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';


@NgModule({
	declarations: [
		AppComponent,
		SearchComponent
	],
	imports: [
		BrowserModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
