import { error, json } from "@sveltejs/kit";
import prisma from "$lib/server/prisma.js";
import bcrypt from "bcrypt";

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
	const user = await prisma.user.findUnique({
		where: { email: params.email },
	});

	if (!user) throw error(400, "Invalid username and email!");
	return json({ user });
}

/** @type {import('./$types').RequestHandler} */
export async function PATCH({ request, params }) {
	const { email, password, username, image } = await request.json();
	const user = await prisma.user.update({
		where: { id: parseInt(params.email) },
		data: {
			email,
			password: await bcrypt.hash(password, 10),
			username,
			image: image ?? `https://robohash.org/${username}`,
		},
	});
	return json({ user });
}
