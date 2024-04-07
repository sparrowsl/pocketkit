<script>
	import PostCard from "$lib/components/PostCard.svelte";

	/** @type {import("./$types").PageData} */
	export let data;

	$: console.log(data.posts);
</script>

<section class="max-w-xl grid gap-5">
	{#each data.posts as post}
		<h2>{post.title}</h2>
		<!-- <PostCard {post} /> -->
	{/each}
</section>
