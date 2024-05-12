<!-- Splash message -->
<div id="splash">
	<h1>Welcome!</h1>
	<p>More to come on this home page.</p>
	<p class="smol">(Or maybe not...)</p>
</div>

<!-- Script -->
<script lang="ts">
	// Imports
</script>

<!-- Style -->
<style lang="scss">
	// Main
	#splash {
		align-items: center;
		display: flex;
		justify-content: center;
		flex-direction: column;
		gap: 10px 0;
		height: 100%;
		width: 100%;
	}

	// Splash message
	h1 {
		font-size: 50px;
		font-weight: bold;
		line-height: 55px;
	}

	p {		
		&.smol {
			font-size: 10px;
			line-height: 15px;
		}
	}
</style>