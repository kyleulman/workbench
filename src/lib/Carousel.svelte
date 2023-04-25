<script lang="ts">
	import Glide from '@glidejs/glide';
	import '@glidejs/glide/dist/css/glide.core.min.css';
	import { onMount } from 'svelte';
	import type { CarouselContent } from './types';
	import Preload from './Preload.svelte';

	export let content: CarouselContent;

	onMount(() => {
		new Glide('.glide', {
			type: 'carousel',
			autoplay: content.autoplay
		}).mount();
	});
</script>

<div class="glide relative bg-surface-800 pb-2">
	<div class="glide__track" data-glide-el="track">
		<ul class="glide__slides flex">
			{#each content.slides as slide}
				<li class="glide__slide">
					<Preload content={slide} />
				</li>
			{/each}
		</ul>
	</div>
	{#if content.isControls}
		<div
			data-glide-el="controls"
			class="absolute top-1/2 flex w-full -translate-y-1/2 justify-between p-4 opacity-25 hover:opacity-100"
		>
			<button
				data-glide-dir="<"
				class="btn-icon variant-filled-primary font-material-outlined text-2xl"
			>
				navigate_before
			</button>
			<button
				data-glide-dir=">"
				class="btn-icon variant-filled-primary font-material-outlined text-2xl"
			>
				navigate_next
			</button>
		</div>
	{/if}
</div>
