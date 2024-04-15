export interface Post {
	id?: string;
	author?: {
		username?: string;
		image?: string;
	};
	date?: Date;
	title?: string;
	content?: string;
}
