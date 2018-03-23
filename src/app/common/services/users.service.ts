import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {

	constructor(private http: HttpClient) { }

	private get(filter: IUsersSearchFilter, limit?: number): Observable<IUsersSearchResults> {

		const url = `https://api.github.com/search/users?q=${filter.name}+repos:>${filter.repos}+followers:>${filter.followers}`;

		return this.http.get<IUsersSearchResults>(url);
	}

	public searchUsers(terms: Observable<string>): Observable<IUsersSearchResults> {
		return terms.debounceTime(400)
			.distinctUntilChanged()
			.switchMap(term => this.get({
				name: term,
				repos: 20,
				followers: 20
			}, 10));
	}

}
