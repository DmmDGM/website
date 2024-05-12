<!-- Card -->
<a href="/projects/{project.id}" style="background-color: {project.card.color};" id="card">
	<div id="name">{project.name}</div>
	<div id="description">{project.description}</div>
</a>

<!-- Script -->
<script lang="ts">
	import type { Project } from "$lib/projects";

	// Imports
	export let project: Project;
</script>

<!-- Style -->
<style lang="scss">
	#card {
		padding: 10px 20px;
		display: flex;
		flex-direction: column;
		gap: 5px 0px;
		opacity: 0.75;
		border-radius: 5px;
		transition: all 0.1s ease;

		&:hover {
			opacity: 1;
		}

		#name {
			// font-size: 20px;
			// line-height: 25px;
			font-weight: bold;
		}
	}
</style>