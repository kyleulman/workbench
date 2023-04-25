<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { Figure as FigureType } from './types';
	import Figure from './Figure.svelte';

	export let content: FigureType;

	function preload(src: string) {
		return new Promise((resolve) => {
			let img = new Image();
			img.onload = resolve;
			img.src = src;
		});
	}
</script>

{#await preload(content.src)}
	<div> <Figure {content} /> </div>
{:then}
	<div in:fly> <Figure {content} /> </div>
{/await}
