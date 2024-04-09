<script>
	export let name = "";
	export let id = "";
	export let value = "";
	export let placeholder = "Enter something";
</script>

<textarea
	{name}
	{id}
	{value}
	{placeholder}
	class="{$$props.class} w-full border-gray-400 rounded text-sm focus:(text-gray-800)"
/>
