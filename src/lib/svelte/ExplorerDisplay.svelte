<!-- Template -->
<div id="explorer">
	<!-- Header -->
	<div class="field" id="header">
		<div class="name">Name</div>
		<div class="description">Description</div>
	</div>

	<!-- Content -->
	{#each content.list() as file}
		<button on:click={() => system.open(file)} class="field">
			<div class="name">
				{file.getFullName()}
			</div>
			<div class="description">
				{file.description}
			</div>
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
		gap: 5px 0px;
		height: calc(100% - 20px);
		margin: 10px;
		overflow-x: hidden;
		overflow-y: scroll;
		padding-right: 10px;
		width: calc(100% - 30px);
	}

	// Field
	.field {
		border-radius: 5px;
		display: flex;
		padding: 5px 10px;
		text-align: left;
		transition: background 0.2s ease, opacity 0.2s ease;

		&#header {
			background-color: var(--sd-black);
			position: sticky;
			top: 0px;
		}
		
		&:focus-visible, &:hover {
			background-color: var(--sd-black-l10);
		}

		.description, .name {
			word-break: break-word;
		}

		.description {
			flex: 1;
		}

		.name {
			width: 250px;
		}
	}
</style>