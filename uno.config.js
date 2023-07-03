import {
	defineConfig,
	presetIcons,
	presetUno,
	presetWebFonts,
	transformerCompileClass,
	transformerVariantGroup,
} from "unocss";
import extractorSvelte from "@unocss/extractor-svelte";

export default defineConfig({
	presets: [presetIcons({}), presetUno(), presetWebFonts({})],
	extractors: [extractorSvelte()],
	transformers: [transformerCompileClass(), transformerVariantGroup()],
});
