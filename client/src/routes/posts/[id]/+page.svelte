<script>
	import { page } from "$app/stores";
	import { enhance } from "$app/forms";
	import dayjs from "dayjs";
	import Image from "$lib/components/shared/Image.svelte";
	import Input from "$lib/components/shared/Input.svelte";

	export let data;
</script>

<article class="max-w-2xl">
	<figure class="flex gap-4 border pb-5 py-2 px-3 rounded bg-white">
		<Image
			src={data.post.author.image.includes("robo")
				? data.post.author.image
				: `/uploads/${data.post.author.image}`}
			alt="{data.post.author.username}'s profile"
			class="rounded-full h-6rem w-6rem"
		/>
		<figcaption class="w-full">
			<section class="border-b mb-2 flex justify-between items-center py-1">
				<div class="flex items-center gap-3">
					<h3 class="text-(blue)">{data.post.author.username}</h3>
					<p class="text-(xs gray-400) tracking-wide">
						{dayjs(data.post.date).format("YYYY-MM-DD")}
					</p>
				</div>
				{#if $page.data.user?.id === $page.data.post.authorId && $page.data.user}
					<div class="flex items-center gap-2">
						<a
							href="/posts/{data.post.id}/edit"
							class="block bg-blue-300 text-(white sm) px-4 py-1 rounded-sm"
						>
							edit
						</a>
						<form action="?/deletePost" method="POST" use:enhance>
							<Input type="hidden" value={data.post.id} name="id" />
							<button class="bg-red-300 text-(sm white) px-4 py-1 rounded-sm">delete</button>
						</form>
					</div>
				{/if}
			</section>

			<section>
				<h2 class="text-(3xl gray-700) mb-2">{data.post.title}</h2>
				<p class="text-gray-600 text-sm whitespace-pre-wrap">{data.post.content}</p>
			</section>
		</figcaption>
	</figure>
</article>
