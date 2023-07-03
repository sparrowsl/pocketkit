<script>
	import Navigation from "../lib/components/Navigation.svelte";
	import "@unocss/reset/tailwind.css";
	import "uno.css";
</script>

<Navigation />
<main class="container py-5 font-roboto">
	<slot />
</main>
