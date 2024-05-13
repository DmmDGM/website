// Imports
import nodeFs from "node:fs";
import nodePath from "node:path";
import type { Project } from "$lib/types";

// Fetches and defines projects
export const projects = await fetchProjects();

// Defines project fetcher
export async function fetchProjects(): Promise<Project[]> {
	// Defines projects
	const projects: Project[] = [];

	// Loads directory
	const filePaths = await nodeFs.promises.readdir(import.meta.dirname);

	// Fetches and loads project
	for(let i = 0; i < filePaths.length; i++) {
		const filePath = filePaths[i];
		const projectPath = nodePath.join(import.meta.dirname, filePath);
		if(!(await nodeFs.promises.lstat(projectPath)).isDirectory()) continue;
		try {
			await nodeFs.promises.access(nodePath.join(projectPath, "project.ts"), nodeFs.constants.F_OK);
			const project: Project = await import(/* @vite-ignore */ `./${filePath}/project`); 
			projects.push(project);
		}
		catch(error) {
			// console.log(error);
			continue;
		}
	}

	// Returns projects
	return projects;
}
