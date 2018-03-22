/* SystemJS module definition */
declare var module: NodeModule;

interface NodeModule {
  id: string;
}

interface IUsersSearchFilter {
	name: string;
	repos: number;
	followers: number;
}

interface IUsersSearchResults {
	total_count: number;
	incomplete_results: boolean;
	items: Array<IUser>
}

interface IUser {
	login: string;
	avatar_url: string;
	html_url: string;
}