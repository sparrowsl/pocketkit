<script>
	import dayjs from "dayjs";

	/** @type {import("$lib/types.js").Blog} */
	export let blog;
</script>

<figure class="flex gap-2">
	<img src="" alt="{blog.author.name}'s profile" class="text-(xs gray-400)" />

	<figcaption>
		<div class="flex items-center gap-3">
			<h3 class="text-blue">{blog.author.name}</h3>
			<p class="text-(xs gray-600) tracking-wide">{dayjs(blog.date).format("YYYY-MM-DD")}</p>
		</div>

		<section>
			<h2 class="text-(2xl gray-800)">{blog.title}</h2>
			<p class="text-gray-600">{blog.content}</p>
		</section>
	</figcaption>
</figure>
