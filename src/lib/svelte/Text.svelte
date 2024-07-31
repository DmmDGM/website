<!-- Template -->
<div id="text">
	<p>{content.data}</p>
</div>

<!-- Script -->
<script lang="ts">
	// Imports
    import * as System from "$lib/ts/system";

	// Exports
	export let system: System._System;

	// Defines content
	$: content = system.content as System._TextFile;
</script>

<!-- Style -->
<style lang="scss">
	// Explorer
	#text {
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
		overflow-y: scroll;
		height: calc(100% - 20px);
		width: calc(100% - 30px);
		margin: 10px 10px;
		padding-right: 10px;
	}

	p {
		padding: 5px 10px;
		white-space: pre-wrap;
	}
</style>