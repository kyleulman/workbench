<script lang="ts">
	import type { IconList } from './types';

	export let content: IconList;
</script>

<section class="space-y-3">
	{#if content.heading}<h2>{@html content.heading}</h2>{/if}
	<ul class="space-y-2">
		{#each content.list as item}
			<li>
				<svelte:element
					this={item.href ? 'a' : 'div'}
					href={item.href}
					class="flex flex-row gap-4 border border-thunder-800 p-2"
					class:clickable={item.href}
					class:flex-row-reverse={item.isReversed}
					class:items-center={item.isItemsCenter}
				>
					<figure class="flex-shrink-0">
						{#if item.icon}
							<span
								class="font-material leading-none"
								style={`font-size: ${item.icon.size}`}>{item.icon.name}</span
							>
						{:else if item.image}
							<img
								src={item.image.src}
								alt={item.image.alt}
								width={item.image.width}
								height={item.image.height}
							/>
						{/if}
					</figure>
					<article class="flex-1">
						<h3 class="font-sans">{item.heading}</h3>
						{#if item.detail}<p class="text-thunder-100/50">
								{@html item.detail}
							</p>{/if}
					</article>
				</svelte:element>
			</li>
		{/each}
	</ul>
</section>

<style lang="postcss">
	.clickable {
		@apply hover:bg-thunder-800;
	}
</style>
