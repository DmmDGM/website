<!-- Container -->
<div id="container">
	<!-- Title -->
	<h1 id="title">My Projects</h1>

	<!-- Search bar -->
	<input bind:value={query} on:input={() => {
		// Records time
		const start = Date.now();

		// Updates search on input
		results = projects.filter((project) => {

			// Cleans data
			const clean = query.trim().toLowerCase();

			// Shows all results with empty query
			if(clean.length === 0) return true;
			
			// Extracts data
			const tags = Array.from(clean.matchAll(/#([-a-zA-Z0-9]*)/g)).map((match) => match[1]);
			const text = clean.replace(/\s*[#@][-a-zA-Z0-9]*\s*/g, " ").trim();
			const versions = Array.from(clean.matchAll(/@([-a-zA-Z0-9]*)/g)).map((match) => match[1]);

			// Filters by tags
			if(
				tags.length !== 0 &&
				!tags.some((tag) => project.tags.join(",").toLowerCase().includes(tag))
			) return false;

			// Filters by version
			if(
				versions.length !== 0 &&
				!versions.some((version) => project.version.toLowerCase().includes(version))
			) return false;

			// Filters by name and description
			if(
				text.length !== 0 &&
				!project.name.toLowerCase().includes(text) &&
				!project.description.toLowerCase().includes(text)
			) return false;

			// Passes filter
			return true;
		});

		// Updates time
		const end = Date.now();
		timelapse = end - start;
	}} placeholder="Search Project | @version or #tag" id="search">

	<!-- Projects -->
	<div id="projects">
		{#if results.length === 0}
			<div id="project-none">I found nothing, sorry... Q . Q</div>
		{:else}
			{#each results as project, index (index)}
				<div class="project">
					<div class="project-header">
						<a href="projects/{project["id"]}" class="project-name">{project["name"]}</a>
						<div class="project-version">{project["version"]}</div>
					</div>
					<div class="project-description">{project["description"]}</div>
					<div class="project-tags">
						{#each project["tags"] as tag}
							<div class="project-tag">{tag}</div>
						{/each}
					</div>
				</div>
			{/each}
		{/if}
	</div>

	<!-- Footer -->
	<footer>
		<div id="counter">{results.length === 3 ? ":3" : results.length} {results.length === 1 ? "result" : "results"} found</div>
		<div id="timelapse">Search took {timelapse} ms</div>
	</footer>
</div>

<!-- Script -->
<script lang="ts">
	// Defines project type
	type Project = {
		description: string;
		id: string;
		name: string;
		tags: string[];
		version: string;
	};

	// Defines projects
	const projects: Project[] = [
		{
			description: "Soda.css - The minimalistic & flexible solution to CSS templates.",
			id: "soda",
			name: "Soda.css",
			tags: [ "web", "css" ],
			version: "Beta"
		}
	];

	// Sets up search bar
	let query: string = "";
	let results: Project[] = projects;
	let timelapse = 0;
	
</script>

<!-- Style -->
<style lang="scss">
	// Container
	#container {
		display: flex;
		flex: 1;
		flex-direction: column;
		gap: 30px 0px;

		// Title
		#title {
			font-size: 25px;
			font-weight: bold;
			line-height: 30px;
			text-align: center;
		}

		// Search bar
		#search {
			background-color: rgb(var(--soda-less-black));
			border-radius: 5px;
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

		// Projects
		#projects {
			display: flex;
			flex-direction: column;

			.project {
				border-bottom: solid 1px rgb(var(--soda-white));
				display: flex;
				flex-direction: column;
				gap: 10px 0px;
				padding: 20px 25px;

				&:first-child {
					border-top: solid 1px rgb(var(--soda-white));
				}

				.project-header {
					align-items: center;
					display: flex;
					gap: 0px 15px;

					.project-name {
						font-size: 20px;
						font-weight: bold;
						line-height: 25px;
						position: relative;

						&::after {
							background-color:rgb(var(--soda-white));
							bottom: -5px;
							content: "";
							height: 3px;
							left: 0%;
							position: absolute;
							transform: scale(0, 1);
							transition: all 0.1s ease-in-out;
							width: 100%;
						}

						&:hover::after {
							transform: scale(0.25, 1);
						}
					}

					.project-version {
						color: rgb(var(--soda-less-white));
					}
				}

				.project-tags {
					display: flex;
					flex-wrap: wrap;
					gap: 10px 10px;

					.project-tag {
						background-color: rgb(var(--soda-less-black));
						border-radius: 5px;
						padding: 3px 5px;
					}
				}
			}

			#project-none {
				text-align: center;
				font-weight: bold;
			}
		}

		footer {
			#counter, #timelapse {
				text-align: right;
			}
		}
	}
</style>
