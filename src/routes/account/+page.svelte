<script>
	import Button from "$lib/components/shared/Button.svelte";
	import Image from "$lib/components/shared/Image.svelte";
	import Input from "$lib/components/shared/Input.svelte";

	const user = {
		name: "JohnDoe",
		email: "john@mail.com",
		image: "https://placehold.co/100x100",
	};
</script>

<section class="max-w-xl mx-auto bg-white border rounded p-5">
	<figure class="flex gap-5 items-center">
		<Image src={user.image} alt="{user.name}'s profile" class="rounded-full" />
		<figcaption>
			<h3 class="text-(gray-800 2xl) mb-1">{user.name}</h3>
			<p class="text-gray">{user.email}</p>
		</figcaption>
	</figure>

	<form action="" method="post" class="py-5">
		<legend class="border-b mb-4 text-gray-700">Account Info</legend>

		<fieldset class="grid gap-4">
			<label for="" class="text-(sm gray-500)">
				<span>Username</span>
				<Input name="password" bind:value={user.name} />
			</label>

			<label for="" class="text-(sm gray-500)">
				<span>Email</span>
				<Input type="email" name="email" bind:value={user.email} />
			</label>

			<label for="file" class="flex flex-col gap-1 text-(sm gray-500)">
				<span>Update profile picture</span>
				<Input type="file" id="file" />
			</label>

			<Button class="border-teal border mt-3">Update</Button>
		</fieldset>
	</form>
</section>
