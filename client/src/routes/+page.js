import { PUBLIC_API_URL } from '$env/static/public';
// import pb from '$lib/pocketbase.js';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const res = await fetch(`${PUBLIC_API_URL}/api/`)
	const data = await res.json()

	console.log(data)
	// const posts = await pb.collection("posts").getFullList();

	// console.log("===============")
	// console.log(posts)

	return { posts: [] };
}
