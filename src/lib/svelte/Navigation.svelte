<!-- Template -->
<div id="navigation">
	<!-- Backward -->
	<button on:click={() => system.back()}>
		<ArrowLeftSvg />
	</button>

	<!-- Forward -->
	<button on:click={() => system.forward()}>
		<ArrowRightSvg />
	</button>

	<!-- Upward -->
	<button on:click={() => system.upward()}>
		<ArrowUpSvg />
	</button>

	<!-- Search query -->
	<input
		bind:value={system.query}
		on:keydown={(event) => {
			// Checks key press
			switch(event.key) {
				// Checks for escape
				case "Escape": {
					// Resets query to file path
					system.query = system.content.getFilePath();
					break;
				}
				
				// Checks for enter key
				case "Enter": {
					// Searches query
					system.search();
					break;
				}
			}
		}}
		placeholder="/"
	>

	<!-- Search -->
	<button on:click={() => system.search()}>
		<SearchSvg />
	</button>
</div>

<!-- Script -->
<script lang="ts">
	// Imports
    import ArrowLeftSvg from "$lib/svg/ArrowLeftSvg.svelte";
    import ArrowRightSvg from "$lib/svg/ArrowRightSvg.svelte";
    import ArrowUpSvg from "$lib/svg/ArrowUpSvg.svelte";
	import SearchSvg from "$lib/svg/SearchSvg.svelte";
    import * as System from "$lib/ts/system";

	// Exports
	export let system: System._System;
</script>

<!-- Style -->
<style lang="scss">
	// Navigation
	#navigation {
		display: flex;
		width: 100%;

		> * {
			background-color: var(--sd-black-l5);
			opacity: 50%;
			padding: 5px 10px;
			transition: opacity 0.2s ease;

			&:first-child {		
				border-radius: 5px 0px 0px 5px;
			}

			&:focus-visible, &:hover {
				opacity: 100%;
			}

			&:last-child {
				border-radius: 0px 5px 5px 0px;
			}
		}

		> input {
			flex: 1;
		}
	}
</style>