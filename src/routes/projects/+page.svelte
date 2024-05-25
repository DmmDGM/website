<!-- Container -->
<div id="container">
	<!-- Title -->
	<h1 class="soda-font-big" id="title">My Projects</h1>

	<!-- Search bar -->
	<input bind:value={searchValue} bind:this={searchInput} on:input={() => {
		searchUpdate();
	}} placeholder="Search Project | @version or #tag" id="search">

	<!-- Projects -->
	<div id="projects">
		{#if searchResult.length === 0}
			<div id="project-none">No projects found, sorry... Q ~ Q</div>
		{:else}
			{#each searchResult as project, index (index)}
				<div class="project">
					<div class="project-header">
						<a href="projects/{project["id"]}" class="project-name soda-hover-line">{project["name"]}</a>
						<button on:click={() => {
							searchAppend("@" + project["version"].toLowerCase());
						}} class="project-version">{project["version"]}</button>
					</div>
					<div class="project-description">{project["description"]}</div>
					<div class="project-tags">
						{#each project["tags"] as tag}
							<button on:click={() => {
								searchAppend("#" + tag.toLowerCase());
							}} class="project-tag">#{tag}</button>
						{/each}
					</div>
				</div>
			{/each}
		{/if}
	</div>

	<!-- Footer -->
	<footer>
		<div id="counter">{searchResult.length === 3 ? ":3" : searchResult.length} {searchResult.length === 1 ? "result" : "results"} found</div>
		<div id="timelapse">Search took {searchTime} ms</div>
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
	let searchInput: HTMLInputElement;
	let searchValue: string = "";
	let searchResult: Project[] = projects;
	let searchTime = 0;
	let searchUpdate = () => {
		// Records time
		const start = Date.now();

		// Updates search on input
		searchResult = projects.filter((project) => {

			// Cleans data
			const clean = searchValue.trim().toLowerCase();

			// Shows all results with empty query
			if(clean.length === 0) return true;
			
			// Extracts data
			const tags = Array.from(clean.matchAll(/(?<=^#|\s#)[-a-zA-Z0-9]*(?=$|\s)/g)).map((match) => match[0]);
			const text = clean.replace(/(?<=^|\s)[#@][-a-zA-Z0-9]*(?=$|\s)/g, " ").trim().replace(/\s+/g, " ");
			const versions = Array.from(clean.matchAll(/(?<=^@|\s@)[-a-zA-Z0-9]*(?=$|\s)/g)).map((match) => match[0]);
			console.table({ tags, text, versions });

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
		searchTime = end - start;
	};
	let searchAppend = (text: string) => {
		// Appends query
		const appendSpace = searchValue.length === 0 || searchValue[searchValue.length - 1] === " ";
		searchValue += (appendSpace ? "" : " ") + text + " ";
		searchUpdate();

		// Focuses search bar
		searchInput.focus();
	};
	
</script>

<!-- Style -->
<style lang="scss">
	// Container
	#container {
		display: flex;
		flex-direction: column;
		gap: 30px 0px;

		// Title
		#title {
			text-align: center;
		}

		// Search bar
		#search {
			background-color: rgb(var(--soda-color-less-black));
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
				border-bottom: solid 1px rgb(var(--soda-color-white));
				display: flex;
				flex-direction: column;
				gap: 10px 0px;
				padding: 20px 25px;

				&:first-child {
					border-top: solid 1px rgb(var(--soda-color-white));
				}

				.project-header {
					align-items: center;
					display: flex;
					gap: 0px 15px;

					.project-name {
						font-size: 20px;
						font-weight: bold;
						line-height: 25px;
					}

					.project-version {
						color: rgb(var(--soda-color-less-white));
						cursor: pointer;
						transition: all 0.2s ease;

						&:hover {
							color: rgb(var(--soda-color-white));
						}
					}
				}

				.project-tags {
					display: flex;
					flex-wrap: wrap;
					gap: 10px 10px;

					.project-tag {
						background-color: rgb(var(--soda-color-less-black));
						border-radius: 5px;
						cursor: pointer;
						opacity: 75%;
						padding: 3px 5px;
						transition: all 0.2s ease;

						&:hover {
							opacity: 100%;
						}
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
