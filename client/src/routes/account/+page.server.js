import { fail, redirect } from "@sveltejs/kit";
import { z } from "zod";
import { uploadFile } from "$lib/utils/uploadImage.js";
import prisma from "$lib/server/prisma.js";

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
		.optional(),
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
			console.log(result);
		} catch (/** @type {*} */ error) {
			const { fieldErrors: errors } = error.flatten();
			return { errors };
		}

		// console.log(result);

		const updated = await prisma.user
			.update({
				where: { id: result.id },
				data: {
					id: result.id,
					email: result.email,
					password: result.password,
					username: result.username,
					image: result.image.size > 0 ? await uploadFile(formData.image) : formData.currentImage.toString(),
				},
			})
			.catch((e) => false);

		if (!updated) return fail(400, { error: "could not update user" });
		return { success: true, message: "Update Successful!!" };
	},
};
