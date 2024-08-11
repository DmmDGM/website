<!-- Template -->
<div id="app">
	<svelte:component bind:system={system} this={content.data} />
</div>

<!-- Script -->
<script lang="ts">
	// Imports
    import * as System from "$lib/ts/system";

	// Exports
	export let system: System._System;

	// Defines content
	$: content = system.content as System._AppFile;
</script>

<!-- Style -->
<style lang="scss">
	// App
	#app {
		height: 100%;
		width: 100%;
	}
</style>