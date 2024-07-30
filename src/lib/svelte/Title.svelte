<!-- Template -->
<div id="title">{title}</div>

<!-- Script -->
<script lang="ts">
	// Exports
	export let title: string = "";
</script>

<!-- Style -->
<style lang="scss">
	// Title
	#title {
		cursor: default;
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
