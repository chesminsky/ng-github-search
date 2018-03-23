import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BASE_URL_TOKEN } from '../../config';

@Injectable()
export class UsersService {

	constructor(
		private http: HttpClient,
		@Inject(BASE_URL_TOKEN) private baseUrl: string
	) { }

	private get(filter: IUsersSearchFilter): Observable<IUsersSearchResults> {

		const url = `${this.baseUrl}/search/users?q=${filter.name}+repos:>${filter.repos}+followers:>${filter.followers}`;

		return this.http.get<IUsersSearchResults>(url);
	}

	public searchUsers(filter$: Observable<IUsersSearchFilter>): Observable<IUsersSearchResults> {
		return filter$.debounceTime(400)
			.distinctUntilChanged()
			.switchMap(filter => this.get(filter));
	}

}
