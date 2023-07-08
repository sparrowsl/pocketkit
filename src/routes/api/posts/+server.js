import { json } from "@sveltejs/kit";
import prisma from "$lib/server/prisma.js";

/** @type {import('./$types').RequestHandler} */
export async function GET({}) {
	const posts = await prisma.post.findMany({
		orderBy: { datePosted: "desc" },
		include: {
			author: {
				select: {
					username: true,
					image: true,
				},
			},
		},
	});

	return json({ posts });
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { id, title, content } = await request.json();

	const post = await prisma.post.create({
		data: { title, content, authorId: id },
	});
	return json({ post });
}
