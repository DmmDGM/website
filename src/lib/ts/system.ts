// Imports
import type { ComponentType } from "svelte";

// Defines history
export class _History<Type> {
	// Defines properties
	index: number = 0;
	timeline: Type[] = [];

	// Defines constructor
	constructor(root: Type) {
		// Pushes root
		this.timeline.push(root);
	}
	
	// Goes back in history
	back(step: number = 1): void {
		// Decreases index
		this.index = Math.max(this.index - step, 0);
	}

	// Clears history
	clear(root: Type): void {
		// Resets timeline
		this.timeline = [ root ];
		this.index = 0;
	}

	// Goes forward in history
	forward(step: number = 1): void {
		// Increases index
		this.index = Math.min(this.index + step, this.timeline.length - 1);
	}

	// Gets current record
	getCurrent(): Type {
		// Returns current record
		return this.timeline[this.index];
	}

	// Overwrites history from current index
	write(record: Type): void {
		// Overwrites timeline
		this.timeline.splice(this.index + 1);
		this.timeline.push(record);
		this.index += 1;
	}
}

// Defines index node
export abstract class _IndexNode {
	// Defines properties
	data: unknown = null;
	hidden: boolean = false;
	icon: ComponentType | string | null = null;
	name: string = "unnamed";
	parent: _IndexNode | null = null;
	suffix: string = "";

	// Defines constructor
	constructor(properties: Partial<_IndexNode> = {}) {
		// Updates properties
		Object.assign(this, properties);
	}

	// Defines file name getter
	getFileName(): string {
		// Returns file name
		return this.name + this.suffix;
	}

	// Defines file path getter
	getFilePath(maxRecursion: number = Number.MAX_SAFE_INTEGER): string {
		// Sets up file path recursion
		let filePath: string = this.getFileName();
		let parent: _IndexNode | null = this.parent;
		let recursion = 0;

		// Recursively checks parents
		while(parent !== null) {
			if(recursion >= maxRecursion) break;
			filePath = parent.getFileName() + filePath;
			parent = parent.parent;
			recursion++;
		}

		// Returns file path
		return filePath;
	}
}

// Defines directory
export class _Directory extends _IndexNode {
	// Defines properties
	data: Set<_IndexNode> = new Set<_IndexNode>();
	suffix: string = "/";

	// Defines constructor
	constructor(properties: Partial<_Directory> = {}) {
		// Extends parent
		super(properties);
		Object.assign(this, properties);
	}
}

// Defines directory
export class _Root extends _Directory {
	// Defines properties
	name: string = "";

	// Defines constructor
	constructor(properties: Partial<_Root> = {}) {
		// Extends parent
		super(properties);
		Object.assign(this, properties);
	}
}

// Defines table file
export class _TableFile extends _IndexNode {
	// Defines properties
	data: string = "";
	suffix: string = ".tbl";

	// Defines constructor
	constructor(properties: Partial<_TableFile> = {}) {
		// Extends parent
		super(properties);
		Object.assign(this, properties);
	}
}

// Defines text file
export class _TextFile extends _IndexNode {
	// Defines properties
	data: string = "";
	suffix: string = ".txt";

	// Defines constructor
	constructor(properties: Partial<_TextFile> = {}) {
		// Extends parent
		super(properties);
		Object.assign(this, properties);
	}
}

// Defines system
export class _System {
	// Defines properties
	content: _IndexNode;
	history: _History<_IndexNode>;
	query: string;
	root: _IndexNode;
	update: () => void;

	constructor(root: _IndexNode, update: () => void) {
		// Updates properties
		this.content = root;
		this.history = new _History<_IndexNode>(root);
		this.query = root.getFilePath();
		this.root = root;
		this.update = update;
	}

	// Goes back in history
	back(): void {
		// Goes back in history
		this.history.back();
		this.content = this.history.getCurrent();
		this.query = this.content.getFilePath();
		this.update();
	}

	// Goes forward in history
	forward(): void {
		// Goes forward in history
		this.history.forward();
		this.content = this.history.getCurrent();
		this.query = this.content.getFilePath();
		this.update();
	}

	// Opens file
	open(content: _IndexNode): void {
		// Opens file
		this.history.write(content);
		this.content = content;
		this.query = content.getFilePath();
		this.update();
	}

	// Searches query
	search(): void {
		console.log(this.query)
	}

	// Goes upward in history
	upward(): void {
		// Opens parent
		if(this.content.parent !== null) this.open(this.content.parent);
	}
}