<script>
	export let name = "";
	export let id = "";
	export let placeholder = "enter something";
</script>

<textarea
	{name}
	{id}
	{placeholder}
	class="{$$props.class} w-full border-gray-400 rounded text-sm"
/>
