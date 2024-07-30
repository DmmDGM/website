<!-- Template -->
<div id="navigation">
	<!-- Backward -->
	<button on:click={() => backward()}>
		<LeftArrowSvg />
	</button>

	<!-- Forward -->
	<button on:click={() => forward()}>
		<RightArrowSvg />
	</button>

	<!-- Upward -->
	<button on:click={() => upward()}>
		<UpArrowSvg />
	</button>

	<!-- Search query -->
	<input
		bind:value={query}
		on:keydown={(event) => {
			if(event.key === "Escape") query = content.path();
			else if(event.key === "Enter") search();
		}}
		placeholder="/"
	>

	<!-- Search -->
	<button on:click={() => search()}>
		<SearchSvg />
	</button>
</div>

<!-- Script -->
<script lang="ts">
	// Imports
	import LeftArrowSvg from "$lib/svg/arrow/LeftArrowSvg.svelte";
	import RightArrowSvg from "$lib/svg/arrow/RightArrowSvg.svelte";
	import SearchSvg from "$lib/svg/util/SearchSvg.svelte";
	import UpArrowSvg from "$lib/svg/arrow/UpArrowSvg.svelte";
    import type { BaseFile, BaseFolder } from "$lib/ts/files";
    import type { Timeline } from "$lib/ts/timeline";

	// Exports
	export let backward: () => void;
	export let content: BaseFile | BaseFolder;
	export let forward: () => void;
	export let query: string;
	export let search: () => void;
	export let timeline: Timeline;
	export let upward: () => void;
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