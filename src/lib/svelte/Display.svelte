<!-- Template -->
<div id="display">
	{#if system.content instanceof System._Directory}
		<ExplorerDisplay bind:system={system} />
	{:else if system.content instanceof System._AppFile}
		<AppDisplay bind:system={system} />
	{:else if system.content instanceof System._TableFile}
		<TableDisplay bind:system={system} />
	{:else if system.content instanceof System._TextFile}
		<TextDisplay bind:system={system} />
	{/if}
</div>

<!-- Script -->
<script lang="ts">
	// Imports
    import * as System from "$lib/ts/system";
    import AppDisplay from "./AppDisplay.svelte";
    import ExplorerDisplay from "./ExplorerDisplay.svelte";
	import TableDisplay from "./TableDisplay.svelte";
	import TextDisplay from "./TextDisplay.svelte";

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