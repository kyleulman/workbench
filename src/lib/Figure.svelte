<script lang="ts">
	import type { Figure } from './types';

	export let content: Figure;
</script>

<figure>
	{#if content.as === 'iframe'}
		<iframe
			src={content.src}
			title={content.title}
			class="w-full"
			height={content.height}
		/>
	{:else}
		<img src={content.src} alt={content.alt} class="bg-surface-700" width={content.width} height={content.height} />
	{/if}

	{#if content.caption}
		<figcaption class="mt-2 text-center italic">{content.caption}</figcaption>
	{/if}
</figure>
