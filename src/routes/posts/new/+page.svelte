<script>
	import Button from "$lib/components/shared/Button.svelte";
	import Input from "$lib/components/shared/Input.svelte";
	import Textarea from "$lib/components/shared/Textarea.svelte";
</script>

<section class="max-w-xl mx-auto">
	<form action="" method="post" class="border bg-white py-5 px-10">
		<legend class="border-b mb-3 text-gray-700">New Post</legend>

		<fieldset class="grid gap-4">
			<label for="" class="text-(sm gray-500)">
				<span>Title</span>
				<Input name="title" />
			</label>

			<label for="content" class="text-(sm gray-500)">
				<span>Contents</span>
				<Textarea name="content" id="content" class="min-h-7rem" />
			</label>

			<Button class="border-teal border">Post</Button>
		</fieldset>
	</form>
</section>
