<script>
	import dayjs from "dayjs";
	import Image from "./shared/Image.svelte";

	/** @type {import("$lib/types.js").Post} */
	export let post;
</script>

<figure class="flex gap-4 border pb-5 py-2 px-3 rounded bg-white">
	<!-- <Image -->
	<!-- 	src={post.author.image.includes("robohash") ? post.author.image : `/uploads/${post.author.image}`} -->
	<!-- 	alt="{post.author.username}'s profile" -->
	<!-- 	class="rounded-full h-4rem w-4rem bg-contain" -->
	<!-- /> -->
	<figcaption class="w-full">
		<div class="flex items-center gap-3 border-b mb-2">
			<h3 class="text-(blue sm)">{post.author?.username}</h3>
			<p class="text-(xs gray-400) tracking-wide">
				{dayjs(post.date).format("YYYY-MM-DD")}
			</p>
		</div>

		<section>
			<h2 class="text-(xl gray-700) hover:(text-blue)">
				<a href="/posts/{post.id}">{post.title}</a>
			</h2>
			<p class="text-gray-600 text-sm line-clamp-2">{post.content}</p>
		</section>
	</figcaption>
</figure>
