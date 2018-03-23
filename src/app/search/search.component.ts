import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { UsersService } from '../common/services/users.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

	public filter: IUsersSearchFilter;
	private filter$ = new Subject<IUsersSearchFilter>();

	@Output() dataLoaded = new EventEmitter<Array<IUser>>();

	constructor(
		private usersService: UsersService
	) {
		// initial filter
		this.filter = {
			name: 'John Resig',
			followers: 500,
			repos: 40
		};
	}

	ngOnInit() {

		this.usersService.searchUsers(this.filter$).subscribe((results: IUsersSearchResults) => {
			this.dataLoaded.emit(results.items);
		});

		this.filter$.next(this.filter);
	}

	onParamChange(key: string, value: string | number) {

		this.filter[key] = value;

		this.filter$.next({...this.filter});
	}



}
