<script>
	import BlogCard from "$lib/components/shared/BlogCard.svelte";

	/** @type {import("./$types").PageData} */
	export let data;
</script>

<section>
	{#each data.blogs as blog}
		<BlogCard {blog} />
	{/each}
</section>

<h1>Welcome to BlogKit</h1>
<p>Visit kit.svelte.dev to read the documentation</p>
<pre>
{JSON.stringify(data, null, 2)}
</pre>
