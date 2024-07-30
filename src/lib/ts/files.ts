// Imports
import type { ComponentType } from "svelte";

// Defines base file
export class BaseFile {
	// Defines properties
	data: unknown = null;
	hidden: boolean = false;
	icon: ComponentType | string | null = null;
	name: string;
	parent: BaseFolder;

	// Defines constructor
	constructor(name: string, parent: BaseFolder, attributes: Partial<BaseFile> = {}) {
		// Defines properties
		Object.assign(this, attributes);
		this.name = name;
		this.parent = parent;
	}

	// Defines path method
	path(): string {
		return this.parent.path() + "/" + this.name;
	}
}

// Defines text file
export class TextFile extends BaseFile {
	// Defines properties
	data: string = "";

	// Defines constructor
	constructor(name: string, parent: BaseFolder, attributes: Partial<TextFile> = {}) {
		// Extends parent
		super(name, parent);

		// Overwrites attributes
		Object.assign(this, attributes);
	}
}

// Defines base folder
export class BaseFolder {
	// Defines properties
	data: Set<BaseFile | BaseFolder> = new Set<BaseFile | BaseFolder>();
	hidden: boolean = false;
	icon: ComponentType | string | null = null;
	name: string;
	parent: BaseFolder | null;

	// Defines constructor
	constructor(name: string, parent: BaseFolder | null, attributes: Partial<BaseFolder> = {}) {
		// Defines properties
		Object.assign(this, attributes);
		this.name = name;
		this.parent = parent;
	}

	// Defines path method
	path(): string {
		return (this.parent === null ? "" : this.parent.path()) + "/" + this.name; 
	}
}

// Defines file folder
export class ExplorerFolder extends BaseFolder {
	// Defines constructor
	constructor(name: string, parent: BaseFolder | null, attributes: Partial<ExplorerFolder> = {}) {
		// Extends parent
		super(name, parent);

		// Overwrites attributes
		Object.assign(this, attributes);
	}
}
