import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { UsersService } from '../common/services/users.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

	public searchTerm$ = new Subject<string>();

	constructor(
		private usersService: UsersService
	) { }

	ngOnInit() {

		this.searchUsers(this.searchTerm$).subscribe((results: IUsersSearchResults) => {
			console.log(results);
		});
	}

	private searchUsers(terms: Observable<string>): Observable<IUsersSearchResults> {
		return terms.debounceTime(400)
			.distinctUntilChanged()
			.switchMap(term => this.usersService.get({
				name: term,
				repos: 20,
				followers: 20
			}, 10));
	}
}
