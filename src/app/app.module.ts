import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { UsersService } from './common/services/users.service';
import { UserComponent } from './user/user.component';


@NgModule({
	declarations: [
		AppComponent,
		SearchComponent,
		UserComponent
	],
	imports: [
		BrowserModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		BrowserAnimationsModule,
		HttpClientModule
	],
	providers: [
		UsersService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
