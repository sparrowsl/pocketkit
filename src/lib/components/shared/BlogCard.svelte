<script>
	import dayjs from "dayjs";

	/** @type {import("$lib/types.js").Blog} */
	export let blog;
</script>

<figure class="flex gap-4 border pb-5 py-2 px-3 rounded bg-white">
	<img
		src={blog.author.image}
		alt="{blog.author.name}'s profile"
		class="text-(xs gray-400) rounded-full h-4rem"
	/>

	<figcaption>
		<div class="flex items-center gap-3 border-b mb-2">
			<h3 class="text-(blue sm)">{blog.author.name}</h3>
			<p class="text-(xs gray-400) tracking-wide">{dayjs(blog.date).format("YYYY-MM-DD")}</p>
		</div>

		<section>
			<h2 class="text-(2xl gray-800)">{blog.title}</h2>
			<p class="text-gray-600 text-sm">{blog.content}</p>
		</section>
	</figcaption>
</figure>
