<!-- Template -->
<div id="display" bind:clientWidth={displayWidth} style="grid-template-columns: repeat({Math.floor((displayWidth - 50) / 125)}, 1fr)">
	{#each Array.from(folder.values()) as file, index }
		<button class="file {index % 2 ? "odd": "even"}">
			<svelte:component this={file.icon} file={file} height=15 width=15 />
			{file.name}
		</button>
	{/each}
</div>

<!-- Script -->
<script lang="ts">
	// Imports
    import type { BaseFolder } from "$lib/ts/files";
	export let folder: BaseFolder;

	// Configures grid
	let displayWidth: number;
</script>

<!-- Style -->
<style lang="scss">
	// Display
	#display {
		display: flex;
		flex-direction: column;
		height: calc(100% - 10px);
		overflow: auto;
		width: calc(100% - 10px);
		padding: 5px 5px;
	}

	// File
	.file {
		align-items: center;
		border-radius: 5px;
		cursor: pointer;
		display: flex;
		gap: 0px 10px;
		padding: 5px 10px;
		opacity: 50%;
		transition: background 0.2s ease, opacity 0.2s ease;

		&:focus-visible, &:hover {
			opacity: 100%;
			background-color: var(--sd-black);
		}
	}
</style>
