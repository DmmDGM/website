<!-- Template -->
<div id="display">
	{#if content instanceof ExplorerFolder}
		<Explorer
			bind:content={content}
			bind:query={query}
			bind:timeline={timeline}
		/>
	{:else if content instanceof TextFile}
		<Text
			bind:content={content}
		/>
	{/if}
</div>

<!-- Script -->
<script lang="ts">
	// Imports
    import { BaseFile, BaseFolder, ExplorerFolder, TextFile } from "$lib/ts/files";
    import type { Timeline } from "$lib/ts/timeline";
    import Explorer from "./Explorer.svelte";
	import Text from "./Text.svelte";

	// Exports
	export let content: BaseFile | BaseFolder;
	export let query: string;
	export let timeline: Timeline;
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