import {
	defineConfig,
	presetIcons,
	presetUno,
	presetWebFonts,
	transformerVariantGroup,
} from "unocss";
import extractorSvelte from "@unocss/extractor-svelte";

export default defineConfig({
	presets: [
		presetIcons({
			extraProperties: {
				display: "inline-block",
				"vertical-align": "middle",
			},
		}),
		presetUno(),
		presetWebFonts({
			// provider: "google",
			fonts: {
				roboto: "Roboto",
			},
		}),
	],
	shortcuts: { container: "max-w-5xl mx-auto px-2" },
	extractors: [extractorSvelte()],
	transformers: [transformerVariantGroup()],
});
