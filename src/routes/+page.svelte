<!-- Template -->
<main>
	<!-- Title -->
	<Title title="DmmD GM" />

	<!-- Navigation -->
	<Navigation
		bind:content={content}
		bind:query={query}
		bind:timeline={timeline}
		backward={() => {
			// Goes backward in history
			timeline.backward();
			content = timeline.current();
			query = content.path();
		}}
		forward={() => {
			// Goes forward in history
			timeline.forward();
			content = timeline.current();
			query = content.path();
		}}
		upward={() => {
			// Jumps to parent
			if(content.parent !== null) {
				timeline.write(content.parent);
				content = timeline.current();
				query = content.path();
			}
		}}
		search={() => {
			console.log("searched " + query);
		}}
	/>

	<!-- Display -->
	<Display
		bind:content={content}
		bind:query={query}
		bind:timeline={timeline}
	/>
</main>

<!-- Script -->
<script lang="ts">
	// Imports
	import "$lib/css/soda.css";
	import Title from "$lib/svelte/Title.svelte";
	import Navigation from "$lib/svelte/Navigation.svelte";
    import Display from "$lib/svelte/Display.svelte";
    import { BaseFile, BaseFolder } from "$lib/ts/files";
	import { root } from "$lib/ts/root";
    import { Timeline } from "$lib/ts/timeline";
	
	// Initializes data
	let content: BaseFile | BaseFolder = root;
	let timeline: Timeline = new Timeline(root);
	let query: string = root.path();
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