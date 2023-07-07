import { json } from "@sveltejs/kit";
import prisma from "$lib/server/prisma.js";

/** @type {import('./$types').RequestHandler} */
export async function GET({}) {
	const posts = await prisma.post.findMany({
		include: {
			author: true,
		},
	});

	return json({ posts });
}
