<script>
	import { enhance } from "$app/forms";
	import Button from "$lib/components/shared/Button.svelte";
	import Input from "$lib/components/shared/Input.svelte";
	import Textarea from "$lib/components/shared/Textarea.svelte";

	export let data;
	export let form;
</script>

<section class="max-w-xl">
	<form action="" method="post" class="border bg-white py-5 px-10" use:enhance>
		<legend class="border-b mb-3 text-gray-700">Edit Post </legend>

		<fieldset class="grid gap-4">
			<Input type="hidden" name="id" value={data.post.id} placeholder="Post title" />
			<label for="" class="text-(sm gray-500)">
				<span>Title</span>
				<Input name="title" value={data.post.title ?? ""} />
				<small class="text-red">{form?.errors?.title ?? ""}</small>
			</label>

			<label for="content" class="text-(sm gray-500)">
				<span>Contents</span>
				<Textarea name="content" id="content" class="min-h-7rem" value={data.post.content ?? ""} />
				<small class="text-red">{form?.errors?.content ?? ""}</small>
			</label>

			<Button class="border-teal border">Update Post</Button>
		</fieldset>
	</form>
</section>
