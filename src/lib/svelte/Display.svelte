<!-- Template -->
<div id="display">
	{#if system.content instanceof System._Directory}
		<Explorer bind:system={system} />
	{:else if system.content instanceof System._TextFile}
		<Text bind:system={system} />
	{/if}
</div>

<!-- Script -->
<script lang="ts">
	// Imports
    import * as System from "$lib/ts/system";
    import Explorer from "./Explorer.svelte";
	import Text from "./Text.svelte";

	// Exports
	export let system: System._System;
</script>

<!-- Style -->
<style lang="scss">
	// Display
	#display {
		background-color: var(--sd-black-l5);
		border-radius: 5px;
		flex: 1;
		overflow: hidden;
		width: 100%;
	}
</style>