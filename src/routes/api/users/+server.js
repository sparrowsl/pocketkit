import { json, error } from "@sveltejs/kit";
import bcrypt from "bcrypt";
import prisma from "$lib/server/prisma";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { email, username, password } = await request.json();

	try {
		const user = await prisma.user.create({
			data: {
				email,
				username,
				image: `https://robohash.org/${username}`,
				password: await bcrypt.hash(password, 10),
			},
		});
		return json({ user });
	} catch (e) {
		throw error(400, "Username or Email already exists");
	}
}
