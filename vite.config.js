/// <reference types="vitest" />
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig, searchForWorkspaceRoot } from "vite";
import unocss from "unocss/vite";

export default defineConfig({
	plugins: [sveltekit(), unocss()],
	server: {
		fs: {
			allow: [searchForWorkspaceRoot(process.cwd()), "/uploads"],
		},
	},
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"],
	},
});
