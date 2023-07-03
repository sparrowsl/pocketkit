/** @type {import("$lib/types.js").Blog[]} */
const blogs = [
	{
		id: crypto.randomUUID(),
		author: {
			name: "JohnDoe",
			image: "",
		},
		content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit nesciunt nemo commodi?
    Dignissimos distinctio ratione tempora perferendis, ex debitis earum sequi amet non. Dolore
    maiores veniam fugiat illum libero? Sit.`,
		date: new Date(),
		title: "Hello World",
	},
];

/** @type {import('./$types').PageLoad} */
export async function load({}) {
	return {
		/** @type {import("$lib/types.js").Blog[]} */
		blogs: blogs || [],
	};
}
