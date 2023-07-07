<script>
	import Image from "$lib/components/shared/Image.svelte";
</script>

<article class="max-w-xl mx-auto">
	<figure class="flex gap-4 border pb-5 py-2 px-3 rounded bg-white">
		<!-- <Image
      src={post.author.image}
      alt="{post.author.username}'s profile"
      class="rounded-full h-4rem"
    /> -->
		<figcaption>
			<div class="flex items-center gap-3 border-b mb-2">
				<!-- <h3 class="text-(blue sm)">{post.author.username}</h3> -->
				<!-- <p class="text-(xs gray-400) tracking-wide">{dayjs(post.date).format("YYYY-MM-DD")}</p> -->
			</div>

			<section>
				<h2 class="text-(2xl gray-700)">
					hey
					<!-- <a href="/posts/{post.id}">{post.title}</a> -->
				</h2>
				<!-- <p class="text-gray-600 text-sm">{post.content}</p> -->
			</section>
		</figcaption>
	</figure>
</article>
