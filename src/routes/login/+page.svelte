<script>
	import Button from "$lib/components/shared/Button.svelte";
	import Input from "$lib/components/shared/Input.svelte";
</script>

<section class="max-w-xl mx-auto">
	<form action="" method="post" class="border bg-white py-5 px-10">
		<legend class="border-b mb-3 text-gray-700">Login Now</legend>

		<fieldset class="grid gap-4">
			<label for="" class="text-(sm gray-500)">
				<span>Email</span>
				<Input type="email" name="email" />
			</label>

			<label for="" class="text-(sm gray-500)">
				<span>Password</span>
				<Input type="password" name="password" />
			</label>

			<label for="remember" class="flex items-center gap-2 text-(sm gray-500)">
				<input type="checkbox" class="rounded" id="remember" />
				<span>Remember Me</span>
			</label>

			<Button class="border-teal border">Login</Button>
		</fieldset>

		<small class="block mt-5 text-gray-600">
			Need an account? <a href="/register" class="text-blue ml-1">register</a>
		</small>
	</form>
</section>
