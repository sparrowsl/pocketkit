import { redirect } from "@sveltejs/kit";
import prisma from "$lib/server/prisma.js";

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
	const res = await fetch(`/api/posts/${params.id}`);
	const { post } = await res.json();
	return { post };
}

/** @type {import('./$types').Actions} */
export const actions = {
	deletePost: async ({ request }) => {
		const { id } = Object.fromEntries(await request.formData());
		await prisma.post.delete({ where: { id: +id } });
		throw redirect(301, "/");
	},
};
