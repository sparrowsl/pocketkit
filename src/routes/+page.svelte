<script>
	import BlogCard from "$lib/components/shared/BlogCard.svelte";

	/** @type {import("./$types").PageData} */
	export let data;
</script>

<section class="max-w-xl mx-auto grid gap-5">
	{#each data.blogs as blog}
		<BlogCard {blog} />
	{/each}
</section>
