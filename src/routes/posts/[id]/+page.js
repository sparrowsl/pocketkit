/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const res = await fetch(`/api/posts/${params.id}`);
	const data = await res.json();

	return {
		/** @type {import("$lib/types.js").Post} */
		post: data.post,
	};
}
