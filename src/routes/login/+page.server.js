import { fail, redirect } from "@sveltejs/kit";
import { z } from "zod";
import bcrypt from "bcrypt";

const loginSchema = z.object({
	email: z
		.string({ required_error: "Email address is required" })
		.min(4, { message: "Email address is too short" })
		.email(),
	password: z
		.string({ required_error: "Password is required" })
		.min(1, { message: "Password must be (1) or more characters" })
		.trim(),
	remember: z.enum(["on"]).optional(),
});

/** @type {import('./$types').PageServerLoad} */
export async function load({}) {}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, fetch, request }) => {
		const formData = Object.fromEntries(await request.formData());

		let result;
		try {
			result = loginSchema.parse(formData);
		} catch (/** @type {*} */ error) {
			const { fieldErrors: errors } = error.flatten();
			return { errors };
		}

		// Check if email exists
		const res = await fetch(`/api/users/${result.email}`);
		const data = await res.json();

		// Compare the email against the user email
		const validPassword = await bcrypt.compare(result.password, data?.user?.password);
		if (!res.ok || !validPassword) return fail(400, { error: data.message });

		// TODO: set jwt token for the user and store in a cookie
		cookies.set("session", data.user.id, {
			httpOnly: true,
			maxAge: result?.remember ? 60 * 60 * 24 * 7 : 60 * 60,
			path: "/",
			sameSite: "strict",
		});

		throw redirect(302, "/");
	},
};
