<script lang="ts">
	import { fly } from 'svelte/transition';

	export let src: string;

	function preload(src: string) {
		return new Promise((resolve) => {
			let img = new Image();
			img.onload = resolve;
			img.src = src;
		});
	}
</script>

{#await preload(src) then _}
	<div in:fly>
		<slot />
	</div>
{/await}
