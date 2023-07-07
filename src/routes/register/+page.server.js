import { z } from "zod";
import { fail, redirect } from "@sveltejs/kit";

const registerSchema = z
	.object({
		username: z
			.string({ required_error: "Username is required" })
			.min(3, { message: "Username must be at least 3 letters" })
			.trim(),
		email: z
			.string({ required_error: "Email address is required" })
			.min(4, { message: "Email address is too short" })
			.email(),
		password: z
			.string({ required_error: "Password is required" })
			.min(4, { message: "Password is too short, must be (4) or more characters" })
			.trim(),
		confirmPassword: z
			.string({ required_error: "Password is required" })
			.min(4, { message: "Password is too short, must be (4) or more characters" })
			.trim(),
	})
	.superRefine(({ password, confirmPassword }, ctx) => {
		if (password !== confirmPassword) {
			ctx.addIssue({
				code: "custom",
				message: "Password and Confirm Password must match!",
				path: ["password"],
			});
			ctx.addIssue({
				code: "custom",
				message: "Password and Confirm Password must match!",
				path: ["confirmPassword"],
			});
		}
	});

/** @type {import('./$types').PageServerLoad} */
export async function load() {}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, fetch, request }) => {
		const formData = Object.fromEntries(await request.formData());

		let result;
		try {
			result = registerSchema.parse(formData);
		} catch (/** @type {*} */ error) {
			const { fieldErrors: errors } = error.flatten();
			const { password, confirmPassword, ...data } = formData;
			return { data, errors };
		}

		const res = await fetch("/api/users", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email: result.email,
				password: result.password,
				username: result.username,
			}),
		});
		const data = await res.json();

		if (!res.ok) return fail(400, { error: data.message });

		// TODO: set cookie/jwt token for the user
		throw redirect(302, "/");
	},
};
