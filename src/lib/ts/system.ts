// Imports
import BlankApp from "$lib/data/BlankApp.svelte";
import type { ComponentType } from "svelte";

// Defines history
export class _History<Type> {
	// Defines properties
	index: number = 0;
	limit: number = 30;
	timeline: Type[] = [];

	// Defines constructor
	constructor(root: Type) {
		// Pushes root
		this.timeline.push(root);
	}
	
	// Goes back in history
	back(step: number = 1): boolean {
		// Decreases index
		if(this.index === 0) return false;
		this.index = Math.max(this.index - step, 0);
		return true;
	}

	// Clears history
	clear(root: Type): true {
		// Resets timeline
		this.timeline = [ root ];
		this.index = 0;
		return true;
	}

	// Goes forward in history
	forward(step: number = 1): boolean {
		// Increases index
		if(this.index === this.timeline.length - 1) return false;
		this.index = Math.min(this.index + step, this.timeline.length - 1);
		return true;
	}

	// Gets current record
	getCurrent(): Type {
		// Returns current record
		return this.timeline[this.index];
	}

	// Overwrites history from current index
	write(record: Type): true {
		// Overwrites timeline
		this.timeline.splice(this.index + 1);
		this.timeline.push(record);
		this.timeline = this.timeline.slice(-this.limit);
		this.index = this.timeline.length - 1;
		return true;
	}
}

// Defines index node
export abstract class _IndexNode {
	// Defines properties
	data: unknown = null;
	description: string = "";
	hidden: boolean = false;
	name: string = "unnamed";
	parent: _IndexNode | null = null;
	suffix: string = "inode";

	// Defines constructor
	constructor(properties: Partial<_IndexNode> = {}) {
		// Updates properties
		Object.assign(this, properties);
	}

	// Retrieves full name
	getFullName(): string {
		// Returns full name
		return this.name + "." + this.suffix;
	}

	// Retrieves full path
	getFullPath(maxRecursion: number = Number.MAX_SAFE_INTEGER): string {
		// Sets up file path recursion
		let filePath: string = this.getFullName();
		let parent: _IndexNode | null = this.parent;
		let recursion = 0;

		// Recursively checks parents
		while(parent !== null) {
			if(recursion >= maxRecursion) break;
			filePath = parent.getFullName() + filePath;
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
	suffix: string = "dir";

	// Defines constructor
	constructor(properties: Partial<_Directory> = {}) {
		// Extends parent
		super(properties);
		Object.assign(this, properties);
	}

	list(): _IndexNode[] {
		// Returns list of files and directories
		return Array.from(this.data).sort((left: _IndexNode, right: _IndexNode) => {
			// Sorts files and directories
			const leftType: number = +(left instanceof _Directory);
			const rightType: number = +(right instanceof _Directory);
			return rightType - leftType || left.getFullName().localeCompare(right.getFullName());
		});
	}

	// Retrieves full name
	getFullName(): string {
		// Returns full name
		return this.name + "/";
	}
}

// Defines directory
export class _Root extends _Directory {
	// Defines properties
	name: string = "";
	suffix: string = "rt";

	// Defines constructor
	constructor(properties: Partial<_Root> = {}) {
		// Extends parent
		super(properties);
		Object.assign(this, properties);
	}
}

// Defines app file
export class _AppFile extends _IndexNode {
	// Defines properties
	data: ComponentType = BlankApp;
	suffix: string = "app";

	// Defines constructor
	constructor(properties: Partial<_AppFile> = {}) {
		// Extends parent
		super(properties);
		Object.assign(this, properties);
	}
}

// Defines blank file
export class _BlankFile extends _IndexNode {
	// Defines properties
	data: null = null;
	suffix: string = "bnk";

	// Defines constructor
	constructor(properties: Partial<_BlankFile> = {}) {
		// Extends parent
		super(properties);
		Object.assign(this, properties);
	}
}

// Defines table file
export class _TableFile extends _IndexNode {
	// Defines properties
	data: { [key: string]: string | number | boolean | null } = {};
	suffix: string = "tbl";

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
	suffix: string = "txt";

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
	blank: _BlankFile = new _BlankFile();
	content: _IndexNode;
	history: _History<_IndexNode>;
	query: string;
	root: _IndexNode;
	update: () => void;

	constructor(root: _IndexNode, update: () => void) {
		// Updates properties
		this.content = root;
		this.history = new _History<_IndexNode>(root);
		this.query = root.getFullPath();
		this.root = root;
		this.update = update;
	}

	// Goes back in history
	back(): boolean {
		// Goes back in history
		if(this.history.back() === false) return false;
		this.content = this.blank;
		this.update();
		setTimeout(() => {
			this.content = this.history.getCurrent();
			this.query = this.content.getFullPath();
			this.update();
		}, 50);
		return true;
	}

	// Clears history
	clear(): boolean {
		// Clears history
		this.history.clear(this.root);
		return this.open(this.root);
	}

	// Goes forward in history
	forward(): boolean {
		// Goes forward in history
		if(this.history.forward() === false) return false;
		this.content = this.blank;
		this.update();
		setTimeout(() => {
			this.content = this.history.getCurrent();
			this.query = this.content.getFullPath();
			this.update();
		}, 50);
		return true;
	}

	// Opens file
	open(content: _IndexNode): boolean {
		// Reloads same file
		if(content === this.content) return this.refresh();

		// Opens file
		this.history.write(content);
		this.content = this.blank;
		this.update();
		setTimeout(() => {
			this.content = content;
			this.query = content.getFullPath();
			this.update();
		}, 50);
		return true;
	}

	// Reloads file
	refresh(): boolean {
		// Reloads file
		if(this.content === this.blank) return false;
		const content = this.content;
		this.content = this.blank;
		this.update();
		setTimeout(() => {
			this.content = content;
			this.query = this.content.getFullPath();
			this.update();
		}, 50);
		return true;
	}

	// Searches query
	search(): boolean {
		// Prevents same file search
		if(this.query === this.content.getFullPath()) return false;

		// Exact search
		if(this.query.startsWith("/")) {
			// Divides query
			const parts: string[] = this.query.split(/(?<=\/)/g);
			
			// Searches file
			let current: _IndexNode | null = this.root;
			for(let i = 1; i < parts.length; i++) {
				// Defines current part
				const part = parts[i];

				// Fails invalid path search
				if(!(current instanceof _Directory)) {
					current = null;
					break;
				}

				// Matches file
				const match: _IndexNode | undefined = Array.from(current.data).find((inode: _IndexNode) => {
					const fullName = inode.getFullName();
					return fullName === part || fullName === part + "/";
				});
				if(typeof match === "undefined") {
					current = null;
					break;
				}
				current = match;
			}

			// Opens file
			if(current !== null) return this.open(current);
			else return this.refresh();
		}

		// Fuzzy search
		return false;
	}

	// Goes upward in history
	upward(): boolean {
		// Opens parent
		if(this.content.parent === null) return false;
		this.open(this.content.parent);
		return true;
	}
}