<script>
	export let src = "";
	export let alt = "";
	/** @type {"lazy" | "eager" | null | undefined} */
	export let loading = "lazy";
</script>

<img {src} {alt} class="{$$props.class} text-(xs gray-400)" {loading} />
