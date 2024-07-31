<!-- Template -->
<main>
	<!-- Title -->
	<Title title="DmmD GM" />

	<!-- Navigation -->
	<Navigation bind:system={system} />

	<!-- Display -->
	<Display bind:system={system} />
</main>

<!-- Script -->
<script lang="ts">
	// Imports
	import "$lib/css/soda.css";
    import Display from "$lib/svelte/Display.svelte";
	import Navigation from "$lib/svelte/Navigation.svelte";
	import Title from "$lib/svelte/Title.svelte";
	import { root } from "$lib/ts/root";
    import * as System from "$lib/ts/system";
	
	// Initializes system
	let system = new System._System(root, () => system = system);
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

	:global(button) {
		cursor: pointer;
	}

	// Main
	main {
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: 10px 0px;
		height: 85%;
		justify-content: center;
		width: 85%;
	}
</style>