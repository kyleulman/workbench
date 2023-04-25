<script lang="ts">
	import type { List } from './types';

	export let content: List;
</script>

<article class="card space-y-8">
	{#if content.heading}
		<h2>{content.heading}</h2>
	{/if}
	<ul class="space-y-8">
		{#each content.list as item}
			<li class="flex flex-col items-start gap-4 sm:flex-row">
				{#if item.icon || item.image}
					<figure
						class="list-item-icon"
					>
						{#if item.icon}
							<span class="font-material-outlined text-[50px] leading-none">
								{item.icon}
							</span>
						{:else if item.image}
							<img
								src={item.image.src}
								alt={item.image.alt}
								width={item.image.width}
								height={item.image.height}
								class="rounded-full"
							/>
						{/if}
					</figure>
				{/if}
				<div class="flex-1 space-y-2">
					{#if item.heading}
						<h3>{@html item.heading}</h3>
					{/if}
					{#if item.detail}
						<p>{@html item.detail}</p>
					{/if}
				</div>
			</li>
		{/each}
	</ul>
</article>

<style lang="postcss">
	.list-item-icon {
		border-radius: var(--theme-rounded-base);
		@apply variant-filled-primary flex h-14 w-14 items-start justify-center overflow-hidden p-1;
	}
</style>