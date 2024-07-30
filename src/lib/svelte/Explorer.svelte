<!-- Template -->
<div id="explorer">
	{#each content.data.values() as file}
		<button
			on:click={() => {
				timeline.write(file);
				// @ts-ignore
				content = timeline.current();
				query = content.path();
			}}
			class="file"
		>
			{file.name}
		</button>
	{/each}
</div>

<!-- Script -->
<script lang="ts">
	// 
    import { ExplorerFolder, BaseFile, BaseFolder } from "$lib/ts/files";
    import type { Timeline } from "$lib/ts/timeline";

	// Exports
	export let content: ExplorerFolder;
	export let query: string;
	export let timeline: Timeline;
</script>

<!-- Style -->
<style lang="scss">
	// Explorer
	#explorer {
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
		overflow-y: scroll;
		height: calc(100% - 20px);
		width: calc(100% - 30px);
		margin: 10px 10px;
		padding-right: 10px;
	}

	// File
	.file {
		border-radius: 5px;
		display: flex;
		opacity: 50%;
		padding: 5px 10px;
		transition: background 0.2s ease, opacity 0.2s ease;

		&:focus-visible, &:hover {
			background-color: var(--sd-black);
			opacity: 100%;
		}
	}
</style>