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
    import { onMount } from "svelte";
	
	// Initializes system
	let system = new System._System(root, () => system = system);

	// Adds global keyboard shortcuts
	onMount(() => {
		document.addEventListener("keydown", (event: KeyboardEvent) => {
			// Checks key press
			switch(event.key) {
				// Goes forward in history
				case "Y": {
					if(event.ctrlKey && event.shiftKey) system.forward();
					break;
				}
				
				// Goes back in history
				case "Z": {
					if(event.ctrlKey && event.shiftKey) system.back();
					break;
				}

				// Goes up to parent
				case "Backspace": {
					if(event.ctrlKey) system.upward();
					break;
				}
				
				case "X": {
					if(event.ctrlKey && event.shiftKey) system.refresh();
					break;
				}
			}
		});
	});
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