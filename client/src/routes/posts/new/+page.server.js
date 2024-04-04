import { redirect } from "@sveltejs/kit";
import { z } from "zod";

const newPostSchema = z.object({
	id: z.string().transform((num) => parseInt(num)),
	title: z
		.string({ required_error: "Post title is required" })
		.min(2, { message: "Post title is too short" })
		.trim(),
	content: z
		.string({ required_error: "Content is required" })
		.min(2, { message: "Post must have a content more than 2 letters!!" })
		.trim(),
});

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	if (!locals.user) throw redirect(307, "/login");
}

/** @type {import('./$types').Actions} */
export const actions = {
	createPost: async ({ request, fetch }) => {
		const formData = Object.fromEntries(await request.formData());

		let result;
		try {
			result = newPostSchema.parse(formData);
		} catch (/** @type {*} */ error) {
			const { fieldErrors: errors } = error.flatten();
			return { data: formData, errors };
		}

		const res = await fetch("/api/posts", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(result),
		});
		if (!res.ok) return;

		throw redirect(302, "/");
	},
};
