<script>
	import Button from "$lib/components/shared/Button.svelte";
	import Input from "$lib/components/shared/Input.svelte";
</script>

<section class="max-w-xl mx-auto">
	<form action="" method="post" class="border bg-white py-5 px-10">
		<legend class="border-b mb-3 text-gray-700">Join Now</legend>

		<fieldset class="grid gap-4">
			<label for="" class="text-(sm gray-500)">
				<span>Username</span>
				<Input />
			</label>

			<label for="" class="text-(sm gray-500)">
				<span>Email</span>
				<Input type="email" />
			</label>

			<label for="" class="text-(sm gray-500)">
				<span>Password</span>
				<Input type="password" />
			</label>

			<label for="" class="text-(sm gray-500)">
				<span>Confirm Password</span>
				<Input type="password" />
			</label>

			<Button class="border-teal border">Sign Up</Button>
		</fieldset>
	</form>
</section>
