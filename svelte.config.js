// Imports
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "svelte-adapter-bun";

// Defines configurations
/** @type {import("@sveltejs/kit").Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: vitePreprocess()
};

// Exports
export default config;
