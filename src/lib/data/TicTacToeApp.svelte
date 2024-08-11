<!-- Template -->
<div id="app">
	<div id="board">
		<div class="row">
			<button on:click={() => place(0)} class="{board[0]}"></button>
			<button on:click={() => place(1)} class="{board[1]}"></button>
			<button on:click={() => place(2)} class="{board[2]}"></button>
		</div>
		<div class="row">
			<button on:click={() => place(3)} class="{board[3]}"></button>
			<button on:click={() => place(4)} class="{board[4]}"></button>
			<button on:click={() => place(5)} class="{board[5]}"></button>
		</div>
		<div class="row">
			<button on:click={() => place(6)} class="{board[6]}"></button>
			<button on:click={() => place(7)} class="{board[7]}"></button>
			<button on:click={() => place(8)} class="{board[8]}"></button>
		</div>
	</div>

	{#if won !== null}
		{won} won!
	{/if}
</div>

<!-- Script -->
<script lang="ts">
	// Imports
    import * as System from "$lib/ts/system";

	// Exports
	export let system: System._System;

	// Defines board
	let board: ("X" | "O" | null)[] = new Array(9).fill(null);
	let player: "X" | "O" = "X";
	let won: "X" | "O" | null = null;

	// Defines place function
	function place(index: number): void {
		if(won !== null) return;
		if(board[index] !== null) return;
		board[index] = player;
		player = player === "X" ? "O" : "X";
		board = board;
		won = check();
	}

	function check(): "X" | "O" | null {
		const patterns = [
			[ 0, 1, 2 ],
			[ 3, 4, 5 ],
			[ 6, 7, 8 ],
			[ 0, 3, 6 ],
			[ 1, 4, 7 ],
			[ 2, 5, 8 ],
			[ 0, 4, 8 ],
			[ 2, 4, 6 ]
		];
		for(let pattern of patterns) {
			if(board[pattern[0]] === null) continue;
			if(board[pattern[0]] === board[pattern[1]] && board[pattern[1]] === board[pattern[2]]) return board[pattern[0]];
		}
		return null;
	}
</script>

<!-- Style -->
<style lang="scss">
	#board {
		display: flex;
		flex-direction: column;
		gap: 10px 0px;

		.row {
			display: flex;
			gap: 0px 10px;
			
			button {
				background-color: yellow;
				border-radius: 5px;
				height: 50px;
				width: 50px;
			}

			.X {
				background-color: red;
			}

			.O {
				background-color: blue;
			}
		}
	}
</style>