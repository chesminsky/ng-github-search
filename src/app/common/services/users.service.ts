import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {

	constructor(private http: HttpClient) { }

	getOrgUnits(filter: IUsersSearchFilter, limit?: number): Observable<IUsersSearchResults> {

		const url = `https://api.github.com/search/users?q=${filter.name}+repos:>${filter.repos}+followers:>${filter.followers}`;

		return this.http.get<IUsersSearchResults>('/equip-orgs/rest/org-units/actions/search');
	}

}