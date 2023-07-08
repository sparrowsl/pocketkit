<script>
	import { enhance } from "$app/forms";
	import { page } from "$app/stores";
	import Button from "$lib/components/shared/Button.svelte";
	import Image from "$lib/components/shared/Image.svelte";
	import Input from "$lib/components/shared/Input.svelte";

	/** @type {import("./$types").ActionData} */
	export let form;

	const user = $page.data?.user;
</script>

{#if form?.success}
	<p class="text-sm">{form.message}</p>
{/if}
<section class="max-w-xl mx-auto bg-white border rounded p-5">
	<figure class="flex gap-5 items-center">
		<Image
			src={user.image.includes("robohash") ? user.image : `/uploads/${user.image}`}
			alt="{user.username}'s profile"
			class="h-6rem w-6rem bg-contain rounded-full"
		/>
		<figcaption>
			<h3 class="text-(gray-800 2xl) mb-1">{user.username}</h3>
			<p class="text-gray">{user.email}</p>
		</figcaption>
	</figure>

	<form action="" method="POST" class="py-5" enctype="multipart/form-data" use:enhance>
		<legend class="border-b mb-4 text-gray-700">Account Info</legend>

		<fieldset class="grid gap-4">
			<Input type="hidden" value={user.id} name="id" />
			<label for="" class="text-(sm gray-500)">
				<span>Username</span>
				<Input name="username" bind:value={user.username} placeholder="username" />
				<small class="text-red">{form?.errors?.username ?? ""}</small>
			</label>

			<label for="" class="text-(sm gray-500)">
				<span>Email</span>
				<Input type="email" name="email" bind:value={user.email} placeholder="email" />
				<small class="text-red">{form?.errors?.email ?? ""}</small>
			</label>

			<label for="" class="text-(sm gray-500)">
				<span>Password</span>
				<Input type="password" name="password" />
				<small class="text-red">{form?.errors?.password ?? ""}</small>
			</label>

			<label for="file" class="flex flex-col gap-1 text-(sm gray-500)">
				<span>Update Image</span>
				<Input type="file" id="file" name="file" />
			</label>

			<Button class="border-teal border mt-3">Update</Button>
		</fieldset>
	</form>
</section>
