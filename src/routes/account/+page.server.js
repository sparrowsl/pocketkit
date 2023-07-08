import { fail, redirect } from "@sveltejs/kit";
import { z } from "zod";

const updateSchema = z.object({
	id: z.string().transform((num) => parseInt(num)),
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
	// .optional(),
	image: z.any(z.instanceof(File)).optional(),
});

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	if (!locals.user) throw redirect(307, "/");
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ fetch, request }) => {
		const formData = Object.fromEntries(await request.formData());

		let result;
		try {
			result = updateSchema.parse(formData);
		} catch (/** @type {*} */ error) {
			const { fieldErrors: errors } = error.flatten();
			console.log(errors);
			return { errors };
		}

		const res = await fetch(`/api/users/${result.id}`, {
			headers: { "Content-Type": "application/json" },
			method: "PATCH",
			body: JSON.stringify(result),
		});
		const data = await res.json();

		if (!res.ok) return fail(400, { error: data.message });
		return { success: true, message: "Update Successful!!" };
	},
};
