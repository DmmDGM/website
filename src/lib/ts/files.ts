// Imports
import BaseFileSvg from "$lib/svg/baseFileSvg.svelte";
import BaseFolderSvg from "$lib/svg/baseFolderSvg.svelte";
import TextFileSvg from "$lib/svg/textFileSvg.svelte";
import type { ComponentType } from "svelte";

// Defines base file
export class BaseFile {
	// Defines properties
	data: unknown = null;
	hidden: boolean = false;
	icon: ComponentType = BaseFileSvg;
	name: string;
	parent: BaseFolder;
	type: string = "base";

	// Defines constructor
	constructor(name: string, parent: BaseFolder, attributes: object = {}) {
		// Defines properties
		Object.assign(this, attributes);
		this.name = name;
		this.parent = parent;
	}
}

// Defines text file
export class TextFile extends BaseFile {
	// Defines properties
	data: string;
	icon: ComponentType = TextFileSvg;
	type: string = "text";

	// Defines constructor
	constructor(name: string, parent: BaseFolder, data: string, attributes: object = {}) {
		// Extends parent
		super(name, parent, attributes);

		// Defines properties
		this.data = data;
	}
}

// Defines base folder
export class BaseFolder extends Set<BaseFile | BaseFolder> {
	// Defines properties
	hidden: boolean = false;
	icon: ComponentType = BaseFolderSvg;
	name: string;
	parent: BaseFolder | null = null;
	type: string = "folder";

	// Defines constructor
	constructor(name: string, parent: BaseFolder | null, attributes: object = {}) {
		// Extends parent
		super();

		// Defines properties
		Object.assign(this, attributes);
		this.name = name;
		this.parent = parent;
	}
}
