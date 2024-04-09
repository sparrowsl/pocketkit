<script>
	import { enhance } from "$app/forms";
	import { page } from "$app/stores";
</script>

<div class="bg-gray-500 text-white font-roboto">
	<nav class="container flex justify-between items-center min-h-10dvh">
		<!-- Logo -->
		<a class="font-bold tracking-wider" href="/">PocketKit</a>

		<ul class="flex gap-5 items-center text-sm">
			{#if !$page?.data.user}
				<li><a href="/login">Login</a></li>
				<li><a href="/register">Register</a></li>
			{:else}
				<li><a href="/posts/new">New Post</a></li>
				<li><a href="/account">Account</a></li>
				<form action="/logout" method="POST" use:enhance>
					<button>Logout</button>
				</form>
			{/if}
		</ul>
	</nav>
</div>
