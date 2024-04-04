<script>
	import Navigation from "../lib/components/Navigation.svelte";
	import "@unocss/reset/tailwind.css";
	import "uno.css";
</script>

<Navigation />
<div class="bg-gray-50 min-h-[calc(100dvh-10dvh)]">
	<main class="container py-5 font-roboto">
		<slot />
	</main>
</div>
