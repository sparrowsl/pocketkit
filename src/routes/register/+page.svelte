<script>
	// @ts-nocheck
	import { enhance } from "$app/forms";
	import Button from "$lib/components/shared/Button.svelte";
	import Input from "$lib/components/shared/Input.svelte";

	/** @type {import("./$types").ActionData} */
	export let form;
	$: console.log(form);
</script>

<section class="max-w-xl mx-auto">
	<form action="" method="post" class="border bg-white py-5 px-10" use:enhance>
		<legend class="border-b mb-3 text-gray-700">Join Now</legend>

		<fieldset class="grid gap-4">
			<label for="" class="text-(sm gray-500)">
				<span>Username</span>
				<Input
					name="username"
					class={form?.errors?.username && "border-red"}
					value={form?.data.username ?? ""}
				/>
				<small class="text-red">{form?.errors?.username ?? ""}</small>
			</label>

			<label for="" class="text-(sm gray-500)">
				<span>Email</span>
				<Input
					type="email"
					name="email"
					class={form?.errors?.email && "border-red"}
					value={form?.data.email ?? ""}
				/>
				<small class="text-red">{form?.errors?.email ?? ""}</small>
			</label>

			<label for="" class="text-(sm gray-500)">
				<span>Password</span>
				<Input type="password" name="password" class={form?.errors?.password && "border-red"} />
				<small class="text-red">{form?.errors?.password ?? ""}</small>
			</label>

			<label for="" class="text-(sm gray-500)">
				<span>Confirm Password</span>
				<Input
					type="password"
					name="confirmPassword"
					class={form?.errors.confirmPassword && "border-red"}
				/>
				<small class="text-red">{form?.errors?.confirmPassword ?? ""}</small>
			</label>

			<Button class="border-teal border">Sign Up</Button>
		</fieldset>

		<small class="block mt-5 text-gray-600">
			Already have an account? <a href="/login" class="text-blue ml-1">login</a>
		</small>
	</form>
</section>
