import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

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

		this.usersService.searchUsers(this.searchTerm$).subscribe((results: IUsersSearchResults) => {
			console.log(results);
		});
	}


}
