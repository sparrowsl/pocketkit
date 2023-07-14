import { redirect } from "@sveltejs/kit";
import { z } from "zod";

const updatePostSchema = z.object({
	id: z.string().transform((num) => parseInt(num)),
	title: z
		.string({ required_error: "Post title is required" })
		.min(2, { message: "Post title is too short" })
		.trim(),
	content: z
		.string({ required_error: "Content is required" })
		.min(2, { message: "Post must have a content!!" })
		.trim(),
});

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, fetch, params }) {
	if (!locals.user) throw redirect(307, `/posts/${params.id}`);

	const res = await fetch(`/api/posts/${params.id}`);
	const { post } = await res.json();

	// Make sure the correct author can edit the post, or redirect back to post
	if (locals.user.id !== post.authorId) throw redirect(307, `/posts/${params.id}`);

	return {
		/** @type {import("$lib/types.js").Post} */
		post,
	};
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ fetch, request }) => {
		const formData = Object.fromEntries(await request.formData());

		let result;
		try {
			result = updatePostSchema.parse(formData);
		} catch (/** @type {*} */ error) {
			const { fieldErrors: errors } = error.flatten();
			return { data: formData, errors };
		}

		const res = await fetch(`/api/posts/${result.id}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(result),
		});
		// const data = await res.json();
		if (res.ok) throw redirect(307, `/posts/${result.id}`);
	},
};
