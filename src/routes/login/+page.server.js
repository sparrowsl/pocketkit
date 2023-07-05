import { z } from "zod";

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

		try {
			const result = loginSchema.parse(formData);
			console.log(result);
		} catch (/** @type {*} */ error) {
			const { fieldErrors: errors } = error.flatten();
			return { errors };
		}
	},
};
