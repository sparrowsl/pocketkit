import pb from '$lib/pocketbase.js';

/** @type {import('./$types').PageLoad} */
export async function load() {
	const posts = await pb.collection("posts").getFullList();

	console.log(posts)

	return {
		// /** @type {import("$lib/types.js").Post[]} */
		posts,
	};
}
