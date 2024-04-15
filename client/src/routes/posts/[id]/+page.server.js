import pb from "$lib/pocketbase";
import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	try {
		const post = await pb.collection("post").getOne(params.id)
		console.log(post)
		return { post }
	} catch (e) {
		console.log(e)
	}

	return { post: {} };
}

/** @type {import('./$types').Actions} */
export const actions = {
	deletePost: async ({ request }) => {
		const { id } = Object.fromEntries(await request.formData());
		// await prisma.post.delete({ where: { id: +id } });
		throw redirect(301, "/");
	},
};
