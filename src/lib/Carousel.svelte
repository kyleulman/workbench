<script lang="ts">
	import Glide from '@glidejs/glide';
	import '@glidejs/glide/dist/css/glide.core.min.css';
	import { onMount } from 'svelte';
	import type { CarouselContent } from './types';
	import Figure from './Figure.svelte';

	export let content: CarouselContent;

	onMount(() => {
		new Glide('.glide', {
			type: 'carousel',
			autoplay: content.autoplay
		}).mount();
	});
</script>

<div class="glide relative">
	<div class="glide__track" data-glide-el="track">
		<ul class="glide__slides flex"> 
			{#each content.slides as slide}
				<li class="glide__slide">
					<Figure content={slide} />
				</li>
			{/each}
		</ul>
	</div>
	{#if content.isControls}
		<div data-glide-el="controls">
			<button
				data-glide-dir="<"
				class="absolute left-0 top-1/2 h-full -translate-y-1/2 bg-neutral-900/50 px-8 py-4"
			>
				Prev
			</button>
			<button
				data-glide-dir=">"
				class="absolute right-0 top-1/2 h-full -translate-y-1/2 bg-neutral-900/50 px-8 py-4"
			>
				Next
			</button>
		</div>
	{/if}
</div>
