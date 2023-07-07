/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const res = await fetch("/api/posts");
	const { posts } = await res.json();

	return {
		/** @type {import("$lib/types.js").Post[]} */
		posts,
	};
}
