<script>
	/** @type {"submit"|"button"|"reset"|null} */
	export let type = "submit";
</script>

<button {type} class="{$$props.class} block w-fit text-sm rounded py-2 px-6">
	<slot>Button</slot>
</button>
