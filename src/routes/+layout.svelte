<!-- Head -->
<svelte:head>
	<title>DmmD GM / {title}</title>
</svelte:head>

<!-- Container -->
<div id="container">
	<!-- Navigation -->
	<nav>
		<a href="/" class:nav-active={path === ""}>Home</a>
		<a href="/about" class:nav-active={path === "about"}>About</a>
		<a href="/projects" class:nav-active={path === "projects"}>Projects</a>
		<a href="/puzzles" class:nav-active={path === "puzzles"}>Puzzles</a>
		<a href="/others" class:nav-active={path === "others"}>Others</a>
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

	// Defines path
	$: path = $page.url.pathname.split("/")[1];

	// Defines title
	$: title = path.length === 0 ? "Home" : path[0].toUpperCase() + path.slice(1).toLowerCase();
</script>

<!-- Style -->
<style lang="scss">
	// Imports
	:global {
		@import "src/lib/soda.scss";
	}

	// Global
	:global(*) {
		color: rgb(var(--soda-color-white)) !important;
		scrollbar-color: rgb(var(--soda-color-white)) rgb(var(--soda-color-black)) !important;
	}

	:global(body) {
		background-color: rgb(var(--soda-color-black)) !important;
	}

	// Container
	#container {
		@extend .soda-flex-column;

		height: 100%;

		// Navigation
		nav {
			@extend .soda-flex-center;

			gap: 15px 10vw;
			padding: 20px 0px;
			user-select: none;

			a {
				@extend .soda-hover-underline;

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