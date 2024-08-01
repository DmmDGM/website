<!-- Template -->
<div id="explorer">
	{#each content.data.values() as file}
		<button on:click={() => system.open(file)} class="file">
			{#if typeof file.icon === "string"}
				<img src={file.icon} alt="icon" />
			{:else if file.icon !== null}
				<svelte:component this={file.icon} />
			{/if}
			{file.getFileName()}
		</button>
	{/each}
</div>

<!-- Script -->
<script lang="ts">
	// Imports
    import * as System from "$lib/ts/system";

	// Exports
	export let system: System._System;

	// Defines content
	$: content = system.content as System._Directory;
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
		align-items: center;
		border-radius: 5px;
		display: flex;
		gap: 0px 10px;
		opacity: 50%;
		padding: 5px 10px;
		transition: background 0.2s ease, opacity 0.2s ease;

		&:focus-visible, &:hover {
			background-color: var(--sd-black);
			opacity: 100%;
		}
	}
</style>