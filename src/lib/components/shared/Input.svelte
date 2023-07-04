<script>
	// @ts-nocheck
	export let placeholder = "";
	export let type = "text";
	export let value = "";
	export let name = "";
	export let id = "";
</script>

<input
	{type}
	{placeholder}
	{name}
	{id}
	on:input={(e) => (value = e?.target?.value)}
	class="{$$props.class} block w-full text-sm rounded border-gray-400"
/>
