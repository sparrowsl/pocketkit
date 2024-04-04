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
export async function PATCH({ request }) {
	const { id, title, content } = await request.json();

	const post = await prisma.post.update({
		where: { id: parseInt(id) },
		data: { title, content },
	});

	return json({ post });
}

/** @type {import('./$types').RequestHandler} */
export async function DELETE({ request }) {
	const { id } = await request.json();
	console.log("id in server,", id);

	await prisma.post.delete({
		where: { id: parseInt(id) },
	});

	return json({ success: true });
}
