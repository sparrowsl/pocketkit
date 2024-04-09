import {
	defineConfig,
	presetIcons,
	presetUno,
	presetWebFonts,
	transformerVariantGroup,
} from "unocss";
import extractorSvelte from "@unocss/extractor-svelte";
import { presetForms } from "@julr/unocss-preset-forms";

export default defineConfig({
	presets: [
		presetForms(),
		presetIcons({
			extraProperties: {
				display: "inline-block",
				"vertical-align": "middle",
			},
		}),
		presetUno(),
		presetWebFonts({
			fonts: {
				roboto: "Roboto",
			},
		}),
	],
	shortcuts: { container: "max-w-5xl mx-auto px-2" },
	extractors: [extractorSvelte()],
	transformers: [transformerVariantGroup()],
});
