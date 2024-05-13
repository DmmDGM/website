<!-- Title -->
<h1>My Projects</h1>

<!-- Search Bar -->
<input placeholder="Search Project">

<!-- Project Cards -->
<div>
	{#each [] as project, index}
		{project}
	{/each}
</div>

<!-- Script -->
<script lang="ts">
	// import { projects } from "$lib/projects/projects";
	import type { Project } from "$lib/types";

	// Imports
	
	
</script>

<!-- Style -->
<style lang="scss">
	// Title
	h1 {
		font-size: 25px;
		font-weight: bold;
		line-height: 30px;
		text-align: center;
	}

	// Search Bar
	input {
		background-color: rgb(var(--soda-less-black));
		border-radius: 5px;
		margin: 30px 0px;
		opacity: 50%;
		padding: 10px 20px;
		position: relative;
		transition: all 0.2s ease;
		width: calc(100% - 40px);

		&:hover {
			opacity: 75%;
		}

		&:focus {
			opacity: 100%;
		}
	}

	// Project Cards
	div {
		display: flex;
		flex-wrap: wrap;
		gap: 15px 15px;
		justify-content: center;
	}
</style>