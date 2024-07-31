// Imports
import * as System from "./system";

// Defines root
export const root = new System._Root();
root.data.add(new System._TextFile({
	data: "hello world",
	name: "hello",
	parent: root
}));
root.data.add(new System._TextFile({
	data: "never gonna give you up\nnever gonna let you down\nnever gonna turn around and hurt you",
	name: "???",
	parent: root
}));

// Defines sub
export const sub = new System._Directory({
	name: "sub",
	parent: root
});
sub.data.add(new System._TextFile({
	data: "hai world",
	name: "hai",
	parent: sub
}));
root.data.add(sub);
