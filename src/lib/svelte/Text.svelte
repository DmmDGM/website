<!-- Template -->
<div id="text">
	<p>{content.data}</p>
</div>

<!-- Script -->
<script lang="ts">
	// Imports
    import { TextFile } from "$lib/ts/files";

	// Exports
	export let content: TextFile;
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