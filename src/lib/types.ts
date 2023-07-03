export interface Blog {
	id: String;
	author: {
		name: String;
		image: String;
	};
	date: Date;
	title: String;
	content: String;
}
