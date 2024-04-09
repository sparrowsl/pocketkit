<script>
	// @ts-nocheck
	import { enhance } from "$app/forms";
	import { page } from "$app/stores";
	import Button from "$lib/components/shared/Button.svelte";
	import Input from "$lib/components/shared/Input.svelte";
	import Textarea from "$lib/components/shared/Textarea.svelte";

	export let form;
</script>

<section class="max-w-xl">
	<form action="?/createPost" method="post" class="border bg-white py-5 px-10" use:enhance>
		<legend class="border-b mb-3 text-gray-700">New Post </legend>

		<fieldset class="grid gap-4">
			<Input type="hidden" name="id" value={$page.data.user.id} />
			<label for="" class="text-(sm gray-500)">
				<span>Title</span>
				<Input name="title" value={form?.data.title ?? ""} />
				<small class="text-red">{form?.errors?.title ?? ""}</small>
			</label>

			<label for="content" class="text-(sm gray-500)">
				<span>Contents</span>
				<Textarea name="content" id="content" class="min-h-7rem" value={form?.data.content ?? ""} />
				<small class="text-red">{form?.errors?.content ?? ""}</small>
			</label>

			<Button class="border-teal border">Post</Button>
		</fieldset>
	</form>
</section>
