<!-- Template -->
<div id="table">
	<!-- Header -->
	<div class="field" id="header">
		<div class="key">Key</div>
		<div class="value">Value</div>
	</div>

	<!-- Content -->
	{#each Object.entries(content.data) as [ key, value ]}
		<div class="field">
			<div class="key">{key}</div>
			<div class="value">{value}</div>
		</div>
	{/each}
</div>

<!-- Script -->
<script lang="ts">
	// Imports
    import * as System from "$lib/ts/system";

	// Exports
	export let system: System._System;

	// Defines content
	$: content = system.content as System._TableFile;
</script>

<!-- Style -->
<style lang="scss">
	// Table
	#table {
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
		transition: background 0.2s ease, opacity 0.2s ease;

		&#header {
			background-color: var(--sd-black);
			position: sticky;
			top: 0px;
		}
		
		&:focus-visible, &:hover {
			background-color: var(--sd-black-l10);
		}

		.key, .value {
			flex: 1;
			word-break: break-word;
		}
	}
</style>