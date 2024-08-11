// Imports
import TicTacToeApp from "$lib/data/TicTacToeApp.svelte";
import * as System from "./system";

// Defines root
export const root = new System._Root();
root.data.add(new System._TextFile({
	data: "hello world",
	description: "yoooaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaayoooaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaayoooaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaayoooaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaayoooaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaayoooaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaayoooaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaayoooaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
	name: "hello",
	parent: root
}));
root.data.add(new System._AppFile({
	data: TicTacToeApp,
	description: ".w.",
	name: "tic tac toe",
	parent: root
}));
root.data.add(new System._TextFile({
	data: "wooo",
	description: ":3",
	name: "haiii",
	parent: root
}));
root.data.add(new System._TextFile({
	data: "never gonna give you up\nnever gonna let you down\nnever gonna turn around and hurt you",
	name: "???",
	parent: root
}));
root.data.add(new System._TableFile({
	data: {
		hai: "yo",
		iipython: "honk",
		"dmmd.name": "dmmd",
		"dmmd.age": 18,
		"dmmd.bool": true,
		"dmmd.null": null
	},
	name: "me",
	parent: root
}));
root.data.add(new System._TextFile({
	data: "hello world",
	description: "yooo",
	name: "hello",
	parent: root
}));
root.data.add(new System._TextFile({
	data: "wooo",
	description: ":3",
	name: "haiii",
	parent: root
}));
root.data.add(new System._TextFile({
	data: "never gonna give you up\nnever gonna let you down\nnever gonna turn around and hurt you",
	name: "???",
	parent: root
}));
root.data.add(new System._TextFile({
	data: "hello world",
	description: "yooo",
	name: "hello",
	parent: root
}));
root.data.add(new System._TextFile({
	data: "wooo",
	description: ":3",
	name: "haiii",
	parent: root
}));
root.data.add(new System._TextFile({
	data: "never gonna give you up\nnever gonna let you down\nnever gonna turn around and hurt you",
	name: "???",
	parent: root
}));
root.data.add(new System._TextFile({
	data: "hello world",
	description: "yooo",
	name: "hello",
	parent: root
}));
root.data.add(new System._TextFile({
	data: "wooo",
	description: ":3",
	name: "haiii",
	parent: root
}));
root.data.add(new System._TextFile({
	data: "never gonna give you up\nnever gonna let you down\nnever gonna turn around and hurt you",
	name: "???",
	parent: root
}));
root.data.add(new System._TextFile({
	data: "hello world",
	description: "yooo",
	name: "hello",
	parent: root
}));
root.data.add(new System._TextFile({
	data: "wooo",
	description: ":3",
	name: "haiii",
	parent: root
}));
root.data.add(new System._TextFile({
	data: "never gonna give you up\nnever gonna let you down\nnever gonna turn around and hurt you",
	name: "???",
	parent: root
}));
root.data.add(new System._TextFile({
	data: "hello world",
	description: "yooo",
	name: "hello",
	parent: root
}));
root.data.add(new System._TextFile({
	data: "wooo",
	description: ":3",
	name: "haiii",
	parent: root
}));
root.data.add(new System._TextFile({
	data: "never gonna give you up\nnever gonna let you down\nnever gonna turn around and hurt you",
	name: "???",
	parent: root
}));
root.data.add(new System._TextFile({
	data: "hello world",
	description: "yooo",
	name: "hello",
	parent: root
}));
root.data.add(new System._TextFile({
	data: "wooo",
	description: ":3",
	name: "haiii",
	parent: root
}));
root.data.add(new System._TextFile({
	data: "never gonna give you up\nnever gonna let you down\nnever gonna turn around and hurt you",
	name: "???",
	parent: root
}));
root.data.add(new System._TextFile({
	data: "hello world",
	description: "yooo",
	name: "hello",
	parent: root
}));
root.data.add(new System._TextFile({
	data: "wooo",
	description: ":3",
	name: "haiii",
	parent: root
}));
root.data.add(new System._TextFile({
	data: "never gonna give you up\nnever gonna let you down\nnever gonna turn around and hurt you",
	name: "???",
	parent: root
}));
root.data.add(new System._TextFile({
	data: "hello world",
	description: "yooo",
	name: "hello",
	parent: root
}));
root.data.add(new System._TextFile({
	data: "wooo",
	description: ":3",
	name: "haiii",
	parent: root
}));
root.data.add(new System._TextFile({
	data: "never gonna give you up\nnever gonna let you down\nnever gonna turn around and hurt you",
	name: "???",
	parent: root
}));
root.data.add(new System._TextFile({
	data: "hello world",
	description: "yooo",
	name: "hello",
	parent: root
}));
root.data.add(new System._TextFile({
	data: "wooo",
	description: ":3",
	name: "haiii",
	parent: root
}));
root.data.add(new System._TextFile({
	data: "never gonna give you up\nnever gonna let you down\nnever gonna turn around and hurt you",
	name: "???",
	parent: root
}));
root.data.add(new System._TextFile({
	data: "hello world",
	description: "yooo",
	name: "hello",
	parent: root
}));
root.data.add(new System._TextFile({
	data: "wooo",
	description: ":3",
	name: "haiii",
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
