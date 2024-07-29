<!-- Head -->

<!-- Template -->
<main>
	<div id="title">DmmD GM</div>
	<div id="navigation">
		<button id="back">
			<LeftArrowSvg />
		</button>
		<button id="forward">
			<RightArrowSvg />
		</button>
		<button id="parent">
			<UpArrowSvg />
		</button>
		<input id="search" placeholder="Search">
	</div>
	<div id="display">
		<ExplorerDisplay folder={root} />
	</div>
</main>

<!-- Script -->
<script lang="ts">
	// Imports
	import "$lib/css/soda.css";
	import ExplorerDisplay from "$lib/svelte/FolderDisplay.svelte";
	import LeftArrowSvg from "$lib/svg/leftArrowSvg.svelte";
	import RightArrowSvg from "$lib/svg/rightArrowSvg.svelte";
	import UpArrowSvg from "$lib/svg/upArrowSvg.svelte";
	import root from "$lib/ts/root";
</script>

<!-- Style -->
<style lang="scss">
	// Default styling
	:global(*) {
		color: var(--sd-white);
	}

	:global(body) {
		align-items: center;
		background-color: var(--sd-black);
		display: flex;
		justify-content: center;
	}

	// Main
	main {
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: 25px 0px;
		height: 80%;
		justify-content: center;
		width: 80%;
	}

	// Title
	#title {
		cursor: default;
		font-weight: bold;
		font-size: 20px;
		line-height: 25px;
		position: relative;

		&::after {
			background-color: var(--sd-white);
			content: "";
			height: 2px;
			left: 0%;
			position: absolute;
			top: 100%;
			transform: scaleX(0%);
			transition: transform 0.2s ease;
			width: 100%;
		}

		&:hover::after {
			transform: scaleX(100%);
		}
	}

	// Navigation
	#navigation {
		display: flex;
		width: 100%;

		button, input {
			background-color: var(--sd-black-l5);
			opacity: 50%;
			padding: 5px 10px;
			transition: opacity 0.2s ease;

			&:first-child {		
				border-radius: 5px 0px 0px 5px;
			}

			&:last-child {
				border-radius: 0px 5px 5px 0px;
			}

			&:focus-visible, &:hover {
				opacity: 100%;
			}
		}

		#search {
			flex: 1;
		}
	}

	// Display
	#display {
		background-color: var(--sd-black-l5);
		border-radius: 5px;
		flex: 1;
		overflow: hidden;
		padding: 5px 10px;
		width: calc(100% - 20px);
	}
</style>