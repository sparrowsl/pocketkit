import path from "path";
import fs from "fs";
import sharp from "sharp";

const uploadBasePath = path.join(process.cwd(), "uploads/");

/**
 * Takes in a file object, upload the file then returns the file name
 * @param {File | FormDataEntryValue | null | * }  image - the File object
 * @returns {Promise<string>} - the image name
 */
export async function uploadFile(image) {
	// If folder does not exists, create the folder before uploading the file
	if (!fs.existsSync(uploadBasePath)) fs.mkdirSync(uploadBasePath);

	const filename = `${crypto.randomUUID()}.webp`;

	await sharp(await image.arrayBuffer())
		.resize({ height: 200, width: 200 })
		.toFile(uploadBasePath + filename);

	return filename;
}
