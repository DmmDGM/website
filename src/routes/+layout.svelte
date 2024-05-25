<!-- Head -->
<svelte:head>
	<title>DmmD GM / {title}</title>
</svelte:head>

<!-- Container -->
<div id="container">
	<!-- Navigation -->
	<nav>
		<a href="/" class:nav-active={path === ""} class="soda-hover-underline">Home</a>
		<a href="/about" class:nav-active={path === "about"} class="soda-hover-underline">About</a>
		<a href="/projects" class:nav-active={path === "projects"} class="soda-hover-underline">Projects</a>
		<a href="/puzzles" class:nav-active={path === "puzzles"} class="soda-hover-underline">Puzzles</a>
		<a href="/others" class:nav-active={path === "others"} class="soda-hover-underline">Others</a>
	</nav>
	
	<!-- Main -->
	<main>
		<slot />
	</main>
</div>

<!-- Script -->
<script lang="ts">
	// Imports
	import { page } from "$app/stores";
	import "$lib/projects/soda/src/main.scss";

	// Defines path
	$: path = $page.url.pathname.split("/")[1];

	// Defines title
	$: title = path.length === 0 ? "Home" : path[0].toUpperCase() + path.slice(1).toLowerCase();
</script>

<!-- Style -->
<style lang="scss">
	// Global
	:global(*) {
		color: rgb(var(--soda-color-white));
		scrollbar-color: rgb(var(--soda-color-white)) rgb(var(--soda-color-black));
	}

	:global(body) {
		// background-color: rgb(var(--soda-color-black));
	}

	// Container
	#container {
		display: flex;
		flex-direction: column;
		height: 100%;

		// Navigation
		nav {
			align-items: center;
			display: flex;
			justify-content: center;
			gap: 15px 10vw;
			padding: 20px 0px;
			user-select: none;

			a {
				font-weight: bold;

				&.nav-active::after {
					transform: scaleX(1);
				}
			}

			@media screen and (max-width: 650px) {
				flex-direction: column;
			}
		}

		// Main
		main {
			flex: 1;
			padding: 25px 10%;
		}
	}
</style>