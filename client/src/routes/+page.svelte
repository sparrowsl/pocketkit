<script>
	import PostCard from "$lib/components/PostCard.svelte";

	export let data;
	$: console.log(data.posts);
</script>

<section class="max-w-xl grid gap-5">
	{#each data.posts as post (post?.id)}
		<PostCard {post} />
	{/each}
</section>
