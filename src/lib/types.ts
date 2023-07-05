export interface Post {
	id: string;
	author: {
		name: string;
		image: string;
	};
	date: Date;
	title: string;
	content: string;
}
