import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { UsersService } from './common/services/users.service';
import { UserCardComponent } from './user-card/user-card.component';
import { BASE_URL, BASE_URL_TOKEN } from './config';


@NgModule({
	declarations: [
		AppComponent,
		SearchComponent,
		UserCardComponent
	],
	imports: [
		HttpClientModule,
		BrowserModule,
		BrowserAnimationsModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatSliderModule
	],
	providers: [
		UsersService,
		{
			provide: BASE_URL_TOKEN,
			useValue: BASE_URL,
			multi: true
		}
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
