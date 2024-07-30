// Imports
import { BaseFolder, BaseFile } from "./files";

// Defines history
export class Timeline {
	// Defines properties
	index: number = 0;
	history: (BaseFile | BaseFolder)[] = [];

	// Defines constructor
	constructor(root: BaseFile | BaseFolder) {
		this.history.push(root);
	}

	// Goes backward in history
	backward(): void {
		this.index = Math.max(this.index - 1, 0);
	}

	// Returns current content
	current(): BaseFile | BaseFolder {
		return this.history[this.index];
	}

	// Goes forward in history
	forward(): void {
		this.index = Math.min(this.index + 1, this.history.length - 1);
	}
	
	// Writes to history
	write(content: BaseFile | BaseFolder): void {
		this.history = this.history.slice(0, this.index + 1);
		this.history.push(content);
		this.index += 1;
	}
}
