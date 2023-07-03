<script>
	// @ts-nocheck
	export let placeholder = "";
	export let type = "text";
	export let value = "";
</script>

<input
	{type}
	{placeholder}
	on:input={(e) => (value = e?.target?.value)}
	class="{$$props.class} block w-full text-sm rounded border-gray-400"
/>
