// Types
export type Card = {
	color: string;
	description: string;
	tags: string[];
	title: string;
	status: "archived" | "early" | "released" | "upcoming";
	version: string;
};

export type Project = {
	card: Card;
};
