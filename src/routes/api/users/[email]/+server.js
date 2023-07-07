import { error, json } from "@sveltejs/kit";
import prisma from "$lib/server/prisma.js";

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
	const user = await prisma.user.findUnique({
		where: { email: params.email },
	});

	if (!user) throw error(400, "Invalid username and email!");
	return json({ user });
}
