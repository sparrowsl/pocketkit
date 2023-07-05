const posts = [
	{
		id: crypto.randomUUID(),
		author: {
			name: "JohnDoe",
			image: "https://placehold.co/50x50",
		},
		content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit nesciunt nemo commodi?
    Dignissimos distinctio ratione tempora perferendis, ex debitis earum sequi amet non. Dolore
    maiores veniam fugiat illum libero? Sit.`,
		date: new Date(),
		title: "Hello World first post",
	},
	{
		id: crypto.randomUUID(),
		author: {
			name: "jenny",
			image: "https://placehold.co/50x50",
		},
		content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit nesciunt nemo commodi?
    Dignissimos distinctio ratione tempora perferendis, ex debitis earum sequi amet non. Dolore
    maiores veniam fugiat illum libero? Sit.`,
		date: new Date(),
		title: "Hello World second post",
	},
];

/** @type {import('./$types').PageLoad} */
export async function load({}) {
	return {
		/** @type {import("$lib/types.js").Post[]} */
		posts: posts || [],
	};
}
