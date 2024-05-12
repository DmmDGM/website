// Types
export type Project = {
	card: {
		color: string;
	},
	description: string;
	name: string;
	id: string;
	release: "active" | "archived" | "upcoming";
	version: string;
};

// Exports
export const soda: Project = {
	card: {
		color: "rgba(var(--soda-purple), 0.5)"
	},
	description: "Simple CSS presets.",
	name: "Soda",
	id: "soda",
	release: "upcoming",
	version: "v1u0"
};

export default {
	soda,
	soda2: soda,
	soda3: soda
};
