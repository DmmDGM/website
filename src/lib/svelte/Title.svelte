<!-- Template -->
<button
	on:click={() => {
		// Appends funny emote
		if(funnyEmotes.length < 50)
			funnyEmotes.push(funnyList[Math.floor(Math.random() * funnyList.length)]);
		funnyEmotes = funnyEmotes;
		
		// Refreshes timers
		if(funnyFlush !== null) clearInterval(funnyFlush);
		if(funnyTimer !== null) clearInterval(funnyTimer);
		
		// Starts timer
		funnyTimer = setTimeout(() => {
			funnyFlush = setInterval(() => {
				funnyEmotes.pop();
				funnyEmotes = funnyEmotes;
				if(funnyEmotes.length === 0 && funnyFlush !== null) clearInterval(funnyFlush);
			}, 25);
			if(funnyTimer !== null) clearTimeout(funnyTimer);
		}, 3000);
	}}
	id="title"
>
	{title} {funnyEmotes.join(" ")}
</button>

<!-- Script -->
<script lang="ts">
	// Exports
	export let title: string = "";
	
	// Defines suffix
	let funnyEmotes: string[] = [];
	let funnyFlush: Timer | null;
	let funnyList: string[] = [
		".w.", ".m.",
		":D", ":c", ":P", ":3", ":o"
	];
	let funnyTimer: Timer | null;
</script>

<!-- Style -->
<style lang="scss">
	// Title
	#title {
		font-size: 20px;
		font-weight: bold;
		line-height: 25px;
		position: relative;

		&::after {
			background-color: var(--sd-white);
			content: "";
			height: 2px;
			left: 0%;
			position: absolute;
			top: 100%;
			transform: scaleX(0%);
			transition: transform 0.2s ease;
			width: 100%;
		}

		&:hover::after {
			transform: scaleX(100%);
		}
	}
</style>
