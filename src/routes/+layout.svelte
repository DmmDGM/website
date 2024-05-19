<!-- Head -->
<svelte:head>
	<title>DmmD GM / {title}</title>
</svelte:head>

<!-- Navigation -->
<nav>
	<a href="/" class:nav-active={path === ""}>Home</a>
	<a href="/about" class:nav-active={path === "about"}>About</a>
	<a href="/projects" class:nav-active={path === "projects"}>Projects</a>
	<a href="/puzzles" class:nav-active={path === "puzzles"}>Puzzles</a>
</nav>

<!-- Main -->
<main>
	<slot />
</main>

<!-- Script -->
<script lang="ts">
	// Imports
	import { page } from "$app/stores";
	import "$lib/projects/soda/beta.css";

	// Defines path
	$: path = $page.url.pathname.split("/")[1];

	// Defines title
	$: title = path.length === 0 ? "Home" : path[0].toUpperCase() + path.slice(1).toLowerCase();
</script>

<!-- Style -->
<style lang="scss">
	// Global
	:global(*) {
		color: rgb(var(--soda-white));
		scrollbar-color: rgb(var(--soda-white)) rgb(var(--soda-black));
	}

	:global(body) {
		background-color: rgb(var(--soda-black));
	}

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

			&.nav-active::after {
				transform: scale(1, 1);
			}
		}

		@media screen and (max-width: 500px) {
			flex-direction: column;
		}
	}

	// Main
	main {
		display: flex;
		flex-direction: column;
		min-height: calc(100vh - 50px - 60px);
		padding: 25px 10%;
		width: 80%;

		@media screen and (max-width: 500px) {
			min-height: calc(100vh - 50px - 165px);
		}
	}
</style>