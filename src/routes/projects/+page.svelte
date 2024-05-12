<!-- Title -->
<div id="title">
	<div>Projects</div>
	<input bind:value={filter} placeholder="Search Project">
</div>

<!-- Content -->
<div id="content">
	<!-- Results -->
	{#if filter}
		<!-- Search -->
		<div class="release" id="active">
			<div class="header">Search Results</div>
			{#each Object.entries(projects) as [ , project ]}
				{#if
					project.name.toLowerCase().includes(filter.toLowerCase()) ||
					project.description.toLowerCase().includes(filter.toLowerCase())
				}
					<Card project={project} />
				{/if}
			{/each}
		</div>

	<!-- List -->
	{:else}
		<!-- Active -->
		<div class="release" id="active">
			<div class="header">Active Projects</div>
			{#each Object.entries(projects) as [ , project ]}
				{#if project.release === "active"}
					<Card project={project}/>
				{/if}
			{/each}
		</div>

		<!-- Upcoming -->
		<div class="release" id="upcoming">
			<div class="header">Upcoming Projects</div>
			{#each Object.entries(projects) as [ , project ]}
				{#if project.release === "upcoming"}
					<Card project={project} />
				{/if}
			{/each}
		</div>

		<!-- Archived -->
		<div class="release" id="archived">
			<div class="header">Archived Projects</div>
			{#each Object.entries(projects) as [ , project ]}
				{#if project.release === "archived"}
					<Card project={project} />
				{/if}
			{/each}
		</div>
	{/if}
</div>

<!-- Script -->
<script lang="ts">
	// Imports
	import Card from "./card.svelte";
	import projects from "$lib/projects";

	// Defines filter
	let filter: string;
</script>

<!-- Style -->
<style lang="scss">
	// Title
	#title {
		align-items: center;
		display: flex;
		gap: 0 25px;

		div {
			font-size: 20px;
			font-weight: bold;
			line-height: 25px;
		}

		input {
			background-color: rgb(var(--soda-less-black));
			border-radius: 5px;
			flex: 1;
			padding: 5px 15px;
		}
	}

	// Content
	#content {
		display: flex;
		flex-direction: column;
		gap: 50px 0px;
		padding: 30px 0;

		.release {
			display: flex;
			flex-direction: column;
			gap: 25px 0px;

			.header {
				align-items: center;
				display: flex;
				font-weight: bold;
				gap: 0px 25px;
				
				&::before, &::after {
					background-color: rgb(var(--soda-white));
					content: "";
					flex: 1;
					height: 2px;
				}
			}

			Card {
				&:after {
					content: "hai";
				}
			}
		}
	}
</style>