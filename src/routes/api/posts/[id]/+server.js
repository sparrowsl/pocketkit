import { json } from "@sveltejs/kit";
import prisma from "$lib/server/prisma.js";

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
	const post = await prisma.post.findUnique({
		where: { id: parseInt(params.id) },
		include: {
			author: {
				select: {
					email: true,
					image: true,
					username: true,
				},
			},
		},
	});

	return json({ post });
}

/** @type {import('./$types').RequestHandler} */
export async function DELETE({ request }) {
	console.log(await request.json());
	return json({});
}
