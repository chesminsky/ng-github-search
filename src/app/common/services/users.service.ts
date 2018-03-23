import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {

	constructor(private http: HttpClient) { }

	private get(filter: IUsersSearchFilter): Observable<IUsersSearchResults> {

		const url = `https://api.github.com/search/users?q=${filter.name}+repos:>${filter.repos}+followers:>${filter.followers}`;

		return this.http.get<IUsersSearchResults>(url);
	}

	public searchUsers(filter$: Observable<IUsersSearchFilter>): Observable<IUsersSearchResults> {
		return filter$.debounceTime(400)
			.distinctUntilChanged()
			.switchMap(filter => this.get(filter));
	}

}
