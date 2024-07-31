// Imports
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

// Exports
export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port: 8000
	}
});
