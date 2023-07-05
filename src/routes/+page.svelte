<script>
	import PostCard from "$lib/components/PostCard.svelte";

	/** @type {import("./$types").PageData} */
	export let data;
</script>

<section class="max-w-xl mx-auto grid gap-5">
	{#each data.posts as post}
		<PostCard {post} />
	{/each}
</section>
